import { RoomType } from '../../lib/types/entities';
import { PowerSpotsList } from '../PowerSpotsList';

type RoomViewProps = {
  readonly room: RoomType;
};
export const RoomView: React.FC<RoomViewProps> = ({ room }) => {
  return (
    <div className="flex w-full justify-items-start p-1 border-black">
      <h4 className="w-1/5 flex items-center justify-center border-r border-black p-2">{room.name}</h4>
      <PowerSpotsList powerSpots={room.powerSpots} />
    </div>
  );
};
