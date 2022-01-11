import { PowerSpotsType } from '../../lib/types/entities';

type PowerSpotViewProps = {
  readonly powerSpot: PowerSpotsType;
};
export const PowerSpotView: React.FC<PowerSpotViewProps> = ({ powerSpot }) => {
  return (
    <div className="power-spot">
      <span>{powerSpot.type}</span>
    </div>
  );
};
