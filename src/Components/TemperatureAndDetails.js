import React from "react";
import { RiSunFill } from "react-icons/ri";
import { FaArrowUp } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa";
import { GiWindSlap } from "react-icons/gi";
import { GiSunset } from "react-icons/gi";
import { WiHumidity } from "react-icons/wi";
import { CiTempHigh } from "react-icons/ci";
import { FormatToLocalTime } from "../Services/WeatherService";
import { iconUrlFromCode } from "../Services/WeatherService";

function TemperatureAndDetails({
  weather: {
    details,
    icon,
    temp,
    temp_min,
    temp_max,
    sunrise,
    sunset,
    speed,
    humidity,
    feels_like,
    timezone,
  },
}) {
  return (
    <div>
      <div className=" flex flex-wrap items-center justify-center text-cyan-300 py-6">
        <p>{details}</p>
      </div>
      <div className="flex flex-row flex-wrap items-center justify-between text-white py-3">
        {/*<RiSunFill className="text-2xl">{iconUrlFromCode(icon)}</RiSunFill>
        <span className="text-2xl font-bold">{iconUrlFromCode(icon)}</span>*/}
        <img
          src={iconUrlFromCode(icon)}
          alt="weather icon"
          className="w-22 h-22 "
        />
        <p className="text-5xl">{`${temp.toFixed()}°`}</p>
        <div className="flex flex-col space-y-2">
          <div className="flex items-center justify-center text-sm font-light">
            <CiTempHigh />
            Real Fell:{" "}
            <span className="font-medium ml-1">{`${feels_like.toFixed()}°`}</span>
          </div>
          <div className="flex items-center justify-center text-sm font-light">
            <WiHumidity />
            Humidity{" "}
            <span className="font-medium ml-1">{`${humidity.toFixed()}%`}</span>
          </div>
          <div className="flex items-center justify-center text-sm font-light">
            <GiWindSlap />
            Wind{" "}
            <span className="font-medium ml-1">{`${speed.toFixed()}km/h `}</span>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap items-center justify-center text-white py-3 space-x-2 text-sm">
        <RiSunFill />
        <p className="font-light">
          Rise:
          <span className="font-medium ml-1">
            {FormatToLocalTime(sunrise, timezone, "hh:mm a")}
          </span>
        </p>
        <p className="font-light">|</p>
        <GiSunset />
        <p className="font-light">
          set:
          <span className="font-medium ml-1">
            {FormatToLocalTime(sunset, timezone, "hh:mm a")}
          </span>
        </p>
        <p className="font-light">|</p>
        <FaArrowUp />
        <p className="font-light">
          High:
          <span className="font-medium ml-1">{`${temp_max.toFixed()}°`}</span>
        </p>
        <p className="font-light">|</p>
        <FaArrowDown />
        <p className="font-light">
          Low:
          <span className="font-medium ml-1"> {`${temp_min.toFixed()}°`}</span>
        </p>
      </div>
    </div>
  );
}

export default TemperatureAndDetails;
