import { useParams } from "react-router";
import { vehicleData } from "../component/Data/vehicleData";

const Detail = () => {
  const { id } = useParams();
  const filterdata = vehicleData.filter((v) => v.id === id);
  return (
    <>
      {filterdata.map((x) => (
        <section key={x.id}>
          <div>{x.carName}</div>
          <div>{x.carNumber}</div>
          <div>{x.carStatus}</div>
        </section>
      ))}
    </>
  );
};

export default Detail;
