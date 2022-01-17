import React from 'react';
import {
  Control,
  useFieldArray,
  UseFormRegister,
} from 'react-hook-form';

import type { FlatType } from '../../lib/types/entities';

type PowerSpotsViewProps = {
  control: Control<FlatType>;
  register: UseFormRegister<FlatType>;
  roomIndex: number;
};

export const PowerSpotsView: React.FC<PowerSpotsViewProps> = ({
  roomIndex,
  control,
  register,
}: PowerSpotsViewProps) => {
  const {
    fields: powerSpotFields,
    append: appendPowerSpot,
  } = useFieldArray({
    control,
    name: `rooms.${roomIndex}.powerSpots`,
  });

  return (
    <>
      <div className="flex flex-row flex-wrap p-5 w-full">
        {powerSpotFields.map((powerSpot, index) => (
          <div
            key={`${powerSpot.id}`}
            className="w-full md:w-1/3 px-3 mb-6 md:mb-0"
          >
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-state"
            >
              Power Spot
            </label>
            <div className="relative mb-5">
              <select
                className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-state"
                {...register(
                  `rooms.${roomIndex}.powerSpots.${index}.type` as const
                )}
              >
                <option>Plug</option>
                <option>Ethernet</option>
                <option>Switcher</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex">
        <button
          type="button"
          onClick={() => appendPowerSpot({ type: 'Plug' })}
          className="block flex-initial  m-2 form-add-spot-button bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-4 px-4 rounded inline-flex justify-self-center items-center "
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
          <span>Add power spot</span>
        </button>
      </div>
    </>
  );
};
