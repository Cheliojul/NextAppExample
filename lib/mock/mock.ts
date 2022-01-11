import {
  FlatType,
  PowerPlugsEnum,
  PowerSpotEnum,
  RoomType,
  SwitcherEnum,
} from '../types/entities';
const powerSpotF = {
  type: PowerSpotEnum.PLUG,
  plugType: PowerPlugsEnum.F,
  countries: ['Russia', 'Europe'],
  pinCount: 2,
  isGrounded: true,
  amperage: 16,
  voltageRange: [220, 240],
};
const powerSpotA = {
  type: PowerSpotEnum.PLUG,
  plugType: PowerPlugsEnum.A,
  countries: ['USA', 'Canada'],
  pinCount: 2,
  isGrounded: false,
  amperage: 15,
  voltageRange: [100, 127],
};
const powerSpotB = {
  type: PowerSpotEnum.PLUG,
  plugType: PowerPlugsEnum.C,
  countries: ['USA', 'Canada', 'Mexico'],
  pinCount: 2,
  isGrounded: true,
  amperage: 16,
  voltageRange: [220, 240],
};
const powerSpotC = {
  type: PowerSpotEnum.PLUG,
  plugType: PowerPlugsEnum.C,
  countries: ['Europe', 'South America', 'Asia'],
  pinCount: 2,
  isGrounded: false,
  amperage: 15,
  voltageRange: [100, 127],
};
const EthernetSpot1 = {
  type: PowerSpotEnum.ETHERNET,
  providerName: 'Skylink',
  speed: 100,
};
const Switcher1 = {
  type: PowerSpotEnum.SWITCHER,
  switchType: SwitcherEnum.double,
  isPressable: true,
  buttonCount: 2,
};
const Switcher2 = {
  type: PowerSpotEnum.SWITCHER,
  switchType: SwitcherEnum.spinning,
  isPressable: false,
};

const room1: RoomType = {
  name: 'DinnerRoom',
  powerSpots: [powerSpotF, powerSpotF, powerSpotF, EthernetSpot1, Switcher1],
};
const room2: RoomType = {
  name: 'Bedroom',
  powerSpots: [powerSpotA, powerSpotA, EthernetSpot1, Switcher2],
};
const room3: RoomType = {
  name: 'Kitchen',
  powerSpots: [
    powerSpotB,
    powerSpotB,
    powerSpotB,
    powerSpotB,
    powerSpotB,
    powerSpotB,
    Switcher1,
  ],
};
export const flatMocks: FlatType[] = [
  {
    rooms: [room1, room2, room3],
    floor: 2,
    flatNumber: 26,
  },
  {
    rooms: [room1, room2, room3],
    floor: 8,
    flatNumber: 116,
  },
  {
    rooms: [room1, room2, room2, room3],
    floor: 1,
    flatNumber: 226,
  },
];
