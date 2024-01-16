import { useContext } from "react";
import "./style.css";
import Contexts from "../../context";
import dayjs from "dayjs";

const InfoComp = () => {
  const { data, dataTwo } = useContext(Contexts);
  var vaqtZonasi = Intl.DateTimeFormat().resolvedOptions().timeZone;

  return (
    <>
      <div className="info">
        <p className="m-0 sity text-center md:text-start">{dataTwo?.name}</p>

        <div className="flex flex-col gap-4 md:flex-row items-center md:justify-between mt-10">
          <div className="flex items-end h-[100px]">
            <p className="m-0 degree">{Math.round(dataTwo?.main?.temp)}°C</p>
            {/* <p className="m-0 text">{dataTwo?.weather[0]?.main}</p> */}
          </div>

          <div>
            <p className="m-0 text text-right">
              {/* {vaqtZonasi} */}
              {/* {data?.weather[0]?.main} 63 57 */}
            </p>

            <div>
              <p className="m-0 text">{dataTwo?.name} Sity</p>
              <p className="m-0 text">
                {dayjs(new Date()).format("DD MMMM YYYY")}
              </p>
              <p className="text m-0">
                {dayjs(new Date()).format("h : mm : ss a")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InfoComp;
