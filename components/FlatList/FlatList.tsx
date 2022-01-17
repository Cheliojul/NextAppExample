import React from 'react';

import { FlatView } from '../FlatView';
import { FlatType, PowerSpotEnum } from '../../lib/types/entities';
import { countPowerSpots } from '../../lib/utils/Calculations.util';

type FlatListProps = {
  readonly flats: FlatType[];
};

export const FlatList: React.FC<FlatListProps> = ({ flats }) => {
  const powerSpotsSums = countPowerSpots(flats);

  return (
    <div className="flex items-stretch flex-wrap justify-center flex-col content-center">
      {flats.length >= 1 &&
        flats.map((flatItem) => <FlatView flat={flatItem} />)}
      <div className="flats-container bg-gray-300 rounded-xl p-2 m-2 justify-around flex">
        <p>Summary items to bought:</p>
        <p>Plugs: {powerSpotsSums?.plugCount}</p>
        <p>Ethernet Cables: {powerSpotsSums?.ethernetCount}</p>
        <p>Switchers: {powerSpotsSums?.switcherCount}</p>
      </div>
    </div>
  );
};
