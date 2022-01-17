import React from 'react';

import { FlatView } from '../FlatView';
import type { FlatType } from '../../lib/types/entities';

type FlatListProps = {
  readonly flats: FlatType[];
};

export const FlatList: React.FC<FlatListProps> = ({ flats }) => {
  return (
    <div className="flex items-stretch flex-wrap justify-center flex-col content-center">
      {flats.length >= 1 && flats.map((flatItem) => (
        <FlatView flat={flatItem} />
      ))}
    </div>
  );
};
