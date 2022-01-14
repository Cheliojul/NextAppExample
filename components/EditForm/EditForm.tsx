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
  const addFlatToStore = useStore((state) => state.addFlat);

  async function onSubmit(data: FlatType) {
    addFlatToStore(data);
    reset();
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-wrap -mx-3 mb-6 ">
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="grid-first-name"
          >
            Flat number
          </label>
          <input
            className={
              `appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white` +
              (errors.flatNumber?.message ? 'border border-red-500' : '')
            }
            id="grid-first-name"
            type="number"
            {...register('flatNumber')}
            placeholder="999"
            min={1}
          />
          <p className="text-red-500 text-xs italic">
            {errors.flatNumber?.message}
          </p>
        </div>
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0 ">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="grid-first-name"
          >
            Floor
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            id="grid-first-name"
            type="number"
            {...register('floor')}
            placeholder="5"
            min={1}
            max={100}
          />
          <p className="text-red-500 text-xs italic">{errors.floor?.message}</p>
        </div>
      </div>
      <RoomsView control={control} register={register} errors={errors} />
      <button
        type="submit"
        className="m-4 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex justify-self-center items-center "
      >
        <span>Submit</span>
      </button>
    </form>
  );
};
