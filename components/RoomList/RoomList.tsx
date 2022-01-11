import React from 'react';

import { RoomView } from '../RoomView';
import type { RoomType } from '../../lib/types/entities';

type RoomListProps = {
  readonly rooms: RoomType[];
};

export const RoomList: React.FC<RoomListProps> = (props: RoomListProps) => {
  const rooms: Array<RoomType> = props.rooms;
  return (
    <>
      {rooms.map((room) => (
        <RoomView room={room} />
      ))}
    </>
  );
};
