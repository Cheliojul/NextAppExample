import { FlatType, PowerSpotEnum, PowerSpotsType } from '../types/entities';

export function countPowerSpots(flatsData: FlatType[]) {
  // const obj = {};
  // Object.entries(PowerSpotEnum).forEach(([key, enumValue]) => {
  //   Object.defineProperty(obj, enumValue, {
  //     value: countCertainPowerSpot(flatsData, enumValue),
  //   });
  // });
  const plugCount = countCertainPowerSpot(flatsData, PowerSpotEnum.PLUG);
  const ethernetCount = countCertainPowerSpot(
    flatsData,
    PowerSpotEnum.ETHERNET
  );
  const switcherCount = countCertainPowerSpot(
    flatsData,
    PowerSpotEnum.SWITCHER
  );
  return {
    plugCount,
    ethernetCount,
    switcherCount,
  };
}

function countCertainPowerSpot(flatsData:FlatType[], certainPowerSpotName:string) {
  const certainSumOfSpots = flatsData.reduce((powerSpots:number, flat:FlatType) => {
    return (
      powerSpots +
      flat.rooms.reduce(
        (flatSum, room) =>
          flatSum +
          room.powerSpots.reduce(
            (roomSum, powerSpot:PowerSpotsType) =>
              roomSum + (powerSpot.type === certainPowerSpotName ? 1 : 0),
            0
          ),
        0
      )
    );
  }, 0);
  return certainSumOfSpots;
}
