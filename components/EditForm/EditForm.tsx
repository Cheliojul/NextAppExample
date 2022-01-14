import React, { useState, useEffect, SyntheticEvent } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { useStore } from '../../lib/store/useStoreHook';
import {
  FlatFormDataType,
  FlatType,
  PowerSpotEnum,
  RoomType,
} from '../../lib/types/entities';

export const EditForm: React.FC = () => {
  const [newFlatState, setNewFlatState] = useState<FlatType>({
    id: uuidv4(),
    floor: 1,
    flatNumber: 1,
    rooms: [
      {
        id: uuidv4(),
        powerSpots: [],
        name: '',
      },
    ],
  });
  const addFlatToStore = useStore((state) => state.addFlat);
  const flats = useStore((state) => state.flats);
  const handleAddPowerSpotClick = (e, id: string) => {
    const newRoomsState = newFlatState.rooms.map((room) => {
      if (id === room.id) {
        room.powerSpots.push({ type: `${PowerSpotEnum.PLUG}` });
      }
      return room;
    });
    setNewFlatState({ ...newFlatState, rooms: newRoomsState });
  };

  const handleAddRoomClick = () => {
    setNewFlatState({
      ...newFlatState,
      rooms: [
        ...newFlatState.rooms,
        {
          id: uuidv4(),
          name: '',
          powerSpots: [],
        },
      ],
    });
  };
  const onFloorOrNumberChange = (event: MouseEvent, field: string) => {
    newFlatState[field] = (event.target as HTMLInputElement).value;
    setNewFlatState({ ...newFlatState });
  };
  const onRoomsNameChange = (event: MouseEvent, id: string) => {
    const newRoomsState = newFlatState.rooms.map((room) => {
      if (id === room.id) {
        room.name = (event.target as HTMLInputElement).value;
      }
      return room;
    });
    setNewFlatState({ ...newFlatState, rooms: newRoomsState });
  };

  const onRoomsPowerSpotChange = (
    event: MouseEvent,
    index: number,
    id: string
  ) => {
    const newRoomsState = newFlatState.rooms.map((room: RoomType) => {
      if (id === room.id) {
        room.powerSpots[index] = {
          type: (event.target as HTMLInputElement).value,
        };
      }
      return room;
    });
    setNewFlatState({ ...newFlatState, rooms: newRoomsState });
  };

  async function onSubmit(e) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const flatData: FlatFormDataType = {
      id: uuidv4(),
      floor: '1',
      flatNumber: '1',
      rooms: [],
    };

    formData.forEach((value, fieldName) => {
      let roomIndex = Number(fieldName.slice(0, 1));

      if (fieldName.includes('floor')) {
        flatData.floor = `${value}`;
      }

      if (fieldName.includes('flatNumber')) {
        flatData.flatNumber = `${value}`;
      }

      if (fieldName.includes('name')) {
        flatData.rooms = [
          ...flatData.rooms,
          {
            id: uuidv4(),
            powerSpots: [],
            name: `${value}`,
          },
        ];
      }
      if (fieldName.includes('powerSpot')) {
        flatData.rooms[roomIndex].powerSpots = [
          ...flatData.rooms[roomIndex].powerSpots,
          {
            type: `${value}`,
          },
        ];
      }
    });
    addFlatToStore(newFlatState);
  }

  return (
    <form onSubmit={(e) => onSubmit(e)}>
      <div className="w-full border p-5">
        <div className="flex flex-wrap -mx-3 mb-6 ">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0 ">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-first-name"
            >
              Flat number
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-first-name"
              name="flatNumber"
              type="number"
              defaultValue={newFlatState.flatNumber}
              placeholder="999"
              onChange={(e) => onFloorOrNumberChange(e, 'flatNumber')}
              min={1}
            />
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
              placeholder="5"
              defaultValue={newFlatState.floor}
              onChange={(e) => onFloorOrNumberChange(e, 'floor')}
              min={1}
              max={100}
            />
          </div>
        </div>
        <div className="flex flex-col border">
          {newFlatState.rooms.map((room, roomIndex) => (
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
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-city"
                    type="text"
                    name={`name${roomIndex}`}
                    placeholder="Kitchen"
                    defaultValue={room.name}
                    onChange={(event) => onRoomsNameChange(event, room.id)}
                  />
                </div>
                <>
                  {room.powerSpots.map((powerSpot, index) => (
                    <div
                      key={`${index + room.id}`}
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
                          name={`${roomIndex}powerSpot${index}`}
                          defaultValue={PowerSpotEnum.PLUG}
                          onChange={(event) =>
                            onRoomsPowerSpotChange(event, index, room.id)
                          }
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
                </>
              </div>
              <button
                type="button"
                onClick={(e) => handleAddPowerSpotClick(e, room.id)}
                className="flex-initial form-add-button m-2 form-add-spot-button bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-4 px-4 rounded inline-flex justify-self-center items-center "
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
          ))}
        </div>
        <div className="flex flex-1 p-4">
          <button
            type="button"
            className="form-add-room-button form-add-button bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex justify-self-center items-center "
            onClick={handleAddRoomClick}
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
      <button
        type="submit"
        className="m-4 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex justify-self-center items-center "
      >
        <span>Submit</span>
      </button>
    </form>
  );
};
