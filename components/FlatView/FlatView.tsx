import React from 'react';

import { RoomList } from '../RoomList/RoomList';
import type { FlatType } from '../../lib/types/entities';

type FlatViewProps = {
  readonly flat: FlatType;
};

export const FlatView: React.FC<FlatViewProps> = ({ flat }) => {
  return (
    <div className="flat" key={flat.id}>
      <h3 className="font-bold">Flat №{flat.flatNumber}</h3>
      <div className="room-container">
        <RoomList rooms={flat.rooms} />
      </div>
    </div>
  );
};
