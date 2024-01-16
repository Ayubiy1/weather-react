import "./style.css";

import Sun from "./sun.png";
import Clode from "./clode-2.png";
import Clod from "./clod.png";
import SnowClod from "./Schnee-lineart.png";

const WeatherForecast = () => {
  return (
    <div className="parent w-[100%] h-[250px] md:w-[45%] mx-10">
      <img
        src={SnowClod}
        alt=""
        className="max-w-[250px] w-[100%] h-[100%] objectcover"
      />
    </div>
  );
};

export default WeatherForecast;
