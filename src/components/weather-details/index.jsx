import { useContext } from "react";
import Contexts from "../../context";
import { PiWindLight } from "react-icons/pi";

import "./style.css";

const WeatherDetails = () => {
  const { data, dataTwo } = useContext(Contexts);

  return (
    <div className="parent w-[100%] md:w-[45%] mx-10">
      <div className="childern">
        <div className="flex flex-col items-center justify-center text-[15px]">
          <img
            src="https://static.vecteezy.com/system/resources/thumbnails/011/338/277/small/blowing-wind-sign-png.png"
            alt=""
            className="w-[60px] mt-[-4px]"
          />
          <p className="m-0 text-center mt-[-10px]">
            1.34 km/h <br /> Speed
          </p>
        </div>
      </div>

      <div className="childern">
        <div className="flex items-center justify-center font-bold">
          clouds showes
        </div>
      </div>

      <div className="childern">
        <div className="flex items-center justify-center font-bold">
          <p className="m-0 text">Namlik : {data?.main?.humidity}%</p>
        </div>
      </div>
    </div>
  );
};

export default WeatherDetails;
