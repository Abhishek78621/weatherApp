import React from "react";

import Header from "./Components/Header";
import Input from "./Components/Input";
import TimeAndLocation from "./Components/TimeAndLocation";
import TempratureAndDetails from "./Components/TemperatureAndDetails";
import Forecast from "./Components/Forecast";
import getFormattedWeatherData from "./Services/WeatherService";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  const [query, setquery] = useState({ q: "berlin" });
  const [units, setunits] = useState("metric");
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      const message = query.q ? query.q : "Current Location";
      toast.info("Feteching Weather for " + message);
      await getFormattedWeatherData({ ...query, units }).then((data) => {
        toast.success(
          `Successfully Fetched weahter for ${data.name},${data.country}`
        );
        setWeather(data);
      });
    };

    fetchWeather();
  }, [query, units]);

  const formatBackground = () => {
    if (!weather) return "from-cyan-700 to-blue-700";
    const threshold = units === "metric" ? 70 : 80;
    if (weather.temp <= threshold) return "from-cyan-700 to-blue-700";
    return "from-yellow-700 to-orange-700";
  };

  return (
    <>
      <div
        className={`flex-row flex-wrap mx-auto overflow-hidden box-border  text-center   bg-gradient-to-br from-cyan-700 to-blue-700 h-fit md:h-fit shadow-xl shadow-gray-400 ${formatBackground()}`}
      >
        <Header setquery={setquery} formatBackground={formatBackground} />
        <Input setquery={setquery} setunits={setunits} units={units} />
        {weather && (
          <div>
            <TimeAndLocation weather={weather} />
            <TempratureAndDetails weather={weather} />
            <Forecast title="hourly forecast" items={weather.hourly} />
            <Forecast title="daily forecast" items={weather.daily} />
          </div>
        )}

        <ToastContainer
          className={"text-green-600"}
          autoClose={5000}
          theme="coloured"
          position="top-right"
          newOntop={true}
        />
      </div>
    </>
  );
}
export default App;
