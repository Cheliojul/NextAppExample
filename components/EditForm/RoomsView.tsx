import React from 'react';
import {
  useFieldArray,
  Control,
  UseFormRegister,
  FieldErrors,
} from 'react-hook-form';

import { FlatType } from '../../lib/types/entities';
import { PowerSpotsView } from './PowerSpotsView';

type RoomsViewProps = {
  control: Control<FlatType>;
  register: UseFormRegister<FlatType>;
  errors: FieldErrors<FlatType>;
};

export const RoomsView: React.FC<RoomsViewProps> = ({
  control,
  register,
  errors,
}: RoomsViewProps) => {
  const { fields: roomFields, append: appendRoom } = useFieldArray({
    control,
    name: 'rooms',
  });

  return (
    <div className="w-full border p-5">
      <div className="flex flex-col border">
        {roomFields.map((room, roomIndex) => (
          <div className="flex flex-col border">
            <div
              key={room.id}
              className="flex flex-wrap -mx-3 mb-2 p-5 relative"
            >
              <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-city"
                >
                  Room Name
                </label>
                <input
                  className={
                    'appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500' +
                    (errors?.rooms?.length &&
                    errors?.rooms[roomIndex]?.name?.message
                      ? 'border border-red-500'
                      : '')
                  }
                  id="grid-city"
                  type="text"
                  {...register(`rooms.${roomIndex}.name` as const)}
                  placeholder="Kitchen"
                />
                <p className="text-red-500 text-xs italic p-2">
                  {errors?.rooms?.length &&
                  errors?.rooms[roomIndex]?.name?.message
                    ? 'Room name is required'
                    : ''}
                </p>
              </div>
              <PowerSpotsView
                control={control}
                register={register}
                roomIndex={roomIndex}
              />
            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-1 p-4">
        <button
          type="button"
          className="form-add-room-button ml-auto mr-auto bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex justify-self-center items-center "
          onClick={() => appendRoom({ name: '' })}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            className="h-5 w-5 mx-2"
          >
            <path
              fill="#FFF"
              d="M10 1.6a8.4 8.4 0 1 0 0 16.8 8.4 8.4 0 0 0 0-16.8zm5 9.4h-4v4H9v-4H5V9h4V5h2v4h4v2z"
            />
          </svg>
          <span>Add room</span>
        </button>
      </div>
    </div>
  );
};
