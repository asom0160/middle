import { useNavigate } from "react-router";
import CarName, { CarNameProps } from "../Car/CarName";
import CarNumber, { CarNumberProps } from "../Car/CarNumber";
import CarStatus, { CarStatusProps } from "../Car/CarStatus";
import { STATUS_BG_COLORS } from "./Obj";
import { CarIdProps } from "../vehicleStatusCardType";

export type VehicleStatusCardProps = CarNameProps &
  CarStatusProps &
  CarNumberProps &
  CarIdProps & { carStatus: keyof typeof STATUS_BG_COLORS };
export type Vehicle = {
  carStatus: keyof typeof STATUS_BG_COLORS;
  carName: string;
  carNumber: string;
  id: number;
};
export const VehicleStatusCard = ({
  carStatus,
  carName,
  carNumber,
  id,
}: VehicleStatusCardProps) => {
  const navi = useNavigate();
  const gotoAbout = () => {
    navi(`/detail/${id}`);
  };
  return (
    <div>
      <article
        onClick={() => gotoAbout()}
        style={{
          width: "500px",
          backgroundColor: STATUS_BG_COLORS[carStatus],
          display: "flex",
          flexDirection: "column",
          gap: "4px",
          padding: "24px",
          margin: "10px",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <CarName carName={carName} />
          <CarStatus carStatus={carStatus} />
        </div>
        <CarNumber carNumber={carNumber} />
      </article>
    </div>
  );
};

export default VehicleStatusCard;
