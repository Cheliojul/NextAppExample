import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import { useStore } from '../../lib/store/useStoreHook';
import { FlatType } from '../../lib/types/entities';
import { RoomsView } from './RoomsView';
const schema = yup
  .object({
    flatNumber: yup.string().required(),
    floor: yup.string().required(),
    rooms: yup
      .array()
      .of(
        yup.object().shape({
          name: yup.string().required(),
          powerSpots: yup
            .array()
            .of(
              yup.object().shape({
                type: yup.string(),
              })
            )
            .required(),
        })
      )
      .required(),
  })
  .required();

export const EditForm: React.FC = () => {
  const {
    handleSubmit,
    control,
    register,
    reset,
    formState: { errors },
  } = useForm<FlatType>({
    resolver: yupResolver(schema),
  });
  const [data, setData] = useState();
  const addFlatToStore = useStore((state) => state.addFlat);

  async function onSubmit(data: FlatType) {
    addFlatToStore(data);
    reset();
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <RoomsView {...{ control, register, errors }} />
      <button
        type="submit"
        className="m-4 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex justify-self-center items-center "
      >
        <span>Submit</span>
      </button>
    </form>
  );
};
