import React from 'react';

import { RoomList } from '../RoomList/RoomList';
import type { FlatType } from '../../lib/types/entities';

type FlatViewProps = {
  readonly flat: FlatType;
};

export const FlatView: React.FC<FlatViewProps> = ({ flat }) => {
  return (
    <div className="flat flex text-center flex-col flex-wrap justify-center m-2 border border-r4 min-w-1/2 bg-gray-300 rounded-xl" key={flat.id}>
      <h3 className="font-bold p-2 border-b">Flat №{flat.flatNumber}</h3>
      <div className="flex flex-row flex-wrap">
        <RoomList rooms={flat.rooms} />
      </div>
    </div>
  );
};
