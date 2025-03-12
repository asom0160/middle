import { useState } from "react";
import { Status } from "../component/Tap/SudTap";
import VehicleStatusCard from "../component/vehicle_status_card/VehicleStatusCard";
import Tab from "../component/Tap/Tab";
import { vehicleData } from "../component/Data/vehicleData";

const Inspection = () => {
  const [selected, setSelected] = useState<Status>("진행대기");
  const selectWait = () => setSelected("진행대기");
  const selectComplete = () => setSelected("완료");

  return (
    <>
      <Tab
        selected={selected}
        selectComplete={selectComplete}
        selectWait={selectWait}
      />
      <section
        style={{ display: "flex", flexDirection: "column", gap: "12px" }}
      >
        {vehicleData
          .filter((v) =>
            selected == "완료" ? v.carStatus == "완료" : v.carStatus != "완료"
          )
          .map((v) => (
            <VehicleStatusCard {...v} />
          ))}
      </section>
    </>
  );
};

export default Inspection;
