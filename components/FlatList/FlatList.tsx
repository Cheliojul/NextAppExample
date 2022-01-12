import React from 'react';

import { FlatView } from '../FlatView';
import type { FlatType } from '../../lib/types/entities';

type FlatListProps = {
  readonly flats: FlatType[];
};

export const FlatList: React.FC<FlatListProps> = ({ flats }) => {
  return (
    <div className="flats-container">
      {flats.map((flatItem) => (
        <FlatView flat={flatItem} />
      ))}
    </div>
  );
};
