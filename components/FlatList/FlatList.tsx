import React from 'react';

import { FlatView } from '../FlatView';
import { FlatType, PowerSpotEnum } from '../../lib/types/entities';
import { countPowerSpots } from '../../lib/utils/Calculations.util';

type FlatListProps = {
  readonly flats: FlatType[];
};

export const FlatList: React.FC<FlatListProps> = ({ flats }) => {
  let rozetki = countPowerSpots(flats);

  return (
    <div className="flex items-stretch flex-wrap justify-center flex-col content-center">
      {flats.length >= 1 && flats.map((flatItem) => (
        <FlatView flat={flatItem} />
      ))}
    </div>
  );
};
