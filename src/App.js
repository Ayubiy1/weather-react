import "./App.css";
import axios from "axios";
import InfoComp from "./components/info";
import WeatherDetails from "./components/weather-details";
import WeatherForecast from "./components/weather-forecast";
import Contexts from "./context";
import { useEffect, useState } from "react";
import HeaderComp from "./components/header";
import { useLocalStorageState } from "ahooks";

const API_KEY = "8fbd22850a8d16bd2b2c577075e4846f";

function App() {
  const [data, setData] = useState([]);
  const [dataTwo, setDataTwo] = useState(null);
  const [loading, setLoading] = useState(false);
  const [sityName, setsityName] = useState("toshkent");
  const [token, settoken] = useState("");
  const [aPi, setAPi] = useLocalStorageState("token", {
    defaultValue: "8fbd22850a8d16bd2b2c577075e4846f",
  });

  let sityNameN = "toshkent";

  useEffect(() => {
    const Api = async () => {
      let lat = "",
        lon = "";

      try {
        setLoading(true);

        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${sityName}&appid=${aPi}`
        );

        lat = response?.data?.coord?.lat;
        lon = response?.data?.coord?.lon;

        const res = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?units=metric&lat=${lat}&lon=${lon}&appid=${aPi}`
        );
        setLoading(false);

        setData(response?.data);
        setDataTwo(res?.data);
      } catch (error) {
        alert(error);
      }
    };
    Api();
  }, [sityName]);

  return (
    <>
      <Contexts.Provider
        value={{ dataTwo, data, setData, setsityName, setLoading }}
      >
        {loading !== false ? (
          <div className="h-[100vh] w-[100%] flex flex-col items-center justify-center text-white text-[30px]">
            Loading...
            <div>
              <div className="flex items-center justify-center mt-2">
                <input
                  onChange={(e) => {
                    settoken(e.target.value);
                  }}
                />
                <button
                  onClick={() => {
                    if (token !== "") {
                      setAPi(token);
                    } else {
                      alert("Please enter a token");
                    }
                  }}
                >
                  newn token
                </button>
              </div>

              <a
                className="text-white text-[16px] text-center"
                target="_blank"
                href="https://home.openweathermap.org/api_keys"
              >
                token da xatolik chiqib qolsa
              </a>
            </div>
          </div>
        ) : (
          <div>
            <HeaderComp />

            <div className="flex justify-center items-center mt-20">
              <InfoComp />
            </div>

            <div className="flex gap-4 flex-wrap md:flex-nowrap items-start justify-center mx-auto mt-10 w-[70%]">
              <WeatherDetails />

              <WeatherForecast />
            </div>
          </div>
        )}
      </Contexts.Provider>
    </>
  );
}

export default App;

// import "./App.css";
// import axios from "axios";
// import InfoComp from "./components/info";
// import WeatherDetails from "./components/weather-details";
// import WeatherForecast from "./components/weather-forecast";
// import Contexts from "./context";
// import { useState } from "react";

// const API_KEY = "4d0acb5c587ea09e45d027229439b325";

// function App() {
//   const [data, setData] = useState([]);
//   const [dataTwo, setDataTwo] = useState([]);

//   const Api = async () => {
//     let lat = "",
//       lon = "";
//     try {
//       const response = await axios.get(
//         `https://api.openweathermap.org/geo/1.0/direct?q=andijon&limit=5&appid=4d0acb5c587ea09e45d027229439b325`
//       );

//       lat = data[0]?.lat;
//       lon = data[0]?.lon;

//       const res = await axios.get(
//         `https://api.openweathermap.org/data/2.5/weather?units=metric&lat=${lat}&lon=${lon}&appid=${API_KEY}`
//       );

//       setData(response?.data);
//       return response?.data;
//     } catch (error) {
//       console.error(error);
//     }
//   };
//   Api();

//   return (
//     <>
//       <Contexts.Provider value={{ data, setData }}>
//         <div className="flex justify-center items-center mt-20">
//           <InfoComp />
//         </div>

//         <div className="flex flex-wrap md:flex-nowrap items-start justify-center mx-auto mt-10 w-[70%]">
//           <WeatherDetails />

//           <WeatherForecast />
//         </div>
//       </Contexts.Provider>
//     </>
//   );
// }

// export default App;
