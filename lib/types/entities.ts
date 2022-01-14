export type FlatType = {
  id: string;
  flatNumber: string;
  floor: string;
  rooms: RoomType[];
}

export type RoomType = {
  id: string;
  name: string;
  powerSpots: PowerSpotsType[];
};
export type PowerSpotType = {
  plugType: PowerPlugsEnum;
  countries: string[];
  pinCount: number;
  isGrounded: boolean;
  amperage: number;
  voltageRange: number[];
};
export type PowerSpotsType = { type: string };
// & (
//   | PowerSpotType
//   | SwitcherType
//   | EthernetSpotType
// );
export type EthernetSpotType = {
  providerName: string;
  speed: number;
};
export type SwitcherType = { switchType: SwitcherEnum };
export enum PowerSpotEnum {
  SWITCHER = 'SWITCHER',
  PLUG = 'PLUG',
  ETHERNET = 'ETHERNET',
}
export enum SwitcherEnum {
  single = 'SingleSwitcher',
  double = 'DoubleSwitcher',
  spinning = 'SpinningSwitcher',
}
export enum PowerPlugsEnum {
  A = 'A',
  B = 'B',
  C = 'C',
  D = 'D',
  E = 'E',
  F = 'F',
  G = 'G',
  H = 'H',
  I = 'I',
  J = 'J',
  K = 'K',
  L = 'L',
  M = 'M',
  N = 'N',
  O = 'O',
}
