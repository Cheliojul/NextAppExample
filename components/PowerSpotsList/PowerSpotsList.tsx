import React from 'react';

import { PowerSpotView } from '../PowerSpotView/PowerSpotView';
import type { PowerSpotsType } from '../../lib/types/entities';

type PowerSpotsListProps = {
  readonly powerSpots: PowerSpotsType[];
};

export const PowerSpotsList: React.FC<PowerSpotsListProps> = ({
  powerSpots,
}) => {
  return (
    <>
      {powerSpots.map((powerSpotsItem) => (
        <PowerSpotView powerSpot={powerSpotsItem} />
      ))}
    </>
  );
};
