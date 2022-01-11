import { RoomType } from '../../lib/types/entities';
import { PowerSpotsList } from '../PowerSpotsList';

type RoomViewProps = {
  readonly room: RoomType;
};
export const RoomView: React.FC<RoomViewProps> = ({ room }) => {
  return (
    <div className="room">
      <h4>{room.name}</h4>
      <PowerSpotsList powerSpots={room.powerSpots} />
    </div>
  );
};
