import {
  FlatType,
  PowerPlugsEnum,
  PowerSpotEnum,
  RoomType,
  SwitcherEnum,
} from '../types/entities';

export const BASIC_URL = 'http://localhost:3000/api/getFlats';
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
  id: 1,
  name: 'DinnerRoom',
  powerSpots: [powerSpotF, powerSpotF, powerSpotF, EthernetSpot1, Switcher1],
};

const room2: RoomType = {
  id: 2,
  name: 'Bedroom',
  powerSpots: [powerSpotA, powerSpotA, EthernetSpot1, Switcher2],
};

const room3: RoomType = {
  id: 3,
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
    id: 1,
    rooms: [room1, room2, room3],
    floor: 2,
    flatNumber: 26,
  },
  {
    id: 2,
    rooms: [room1, room2, room3],
    floor: 8,
    flatNumber: 116,
  },
  {
    id: 3,
    rooms: [room1, room2, room2, room3],
    floor: 1,
    flatNumber: 226,
  },
];
