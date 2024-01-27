import "./style.css";

import Sun from "./imgs/sun.png";
import Clouds from "./imgs/Clouds.png";
import Clod from "./imgs/Mist.png";
import Clear from "./imgs/clouds1.png";
import Mist from "./imgs/Schnee-lineart.png";
import { useContext } from "react";
import Contexts from "../../context";

const WeatherForecast = () => {
  const { dataTwo } = useContext(Contexts);

  return (
    <div className="parent w-[100%] h-[250px] md:w-[45%] mx-10 text-white">
      {dataTwo?.weather?.map((i) => {
        console.log(i?.main);
        return (
          <img
            // src={`./imgs/${i?.main}.png`}
            //   "https://static.vecteezy.com/system/resources/previews/017/722/002/non_2x/cloud-search-icon-illustration-cloud-data-search-find-storage-explore-magnifier-server-network-line-outline-icons-vector.jpg"
            src={Clear}
            alt={`${i?.main} 'picture error'`}
            className="max-w-[300px] w-[100%] h-[100%] object-cover"
          />
        );
      })}
    </div>
  );
};

export default WeatherForecast;
