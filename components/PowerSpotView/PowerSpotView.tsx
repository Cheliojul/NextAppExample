import { PowerSpotsType } from '../../lib/types/entities';

type PowerSpotViewProps = {
  readonly powerSpot: PowerSpotsType;
};
export const PowerSpotView: React.FC<PowerSpotViewProps> = ({ powerSpot }) => {
  return (
    <div className=" flex justify-center items-center p-2 m-2 ml-2 bg-yellow-400 rounded-xl ">
      <span>{powerSpot.type}</span>
    </div>
  );
};
