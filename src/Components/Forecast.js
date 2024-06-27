import React from "react";
import { iconUrlFromCode } from "../Services/WeatherService";

function Forecast({ items, title }) {
  return (
    <div>
      <div className="flex items-center justify-start my-6">
        <p className="text-white font-medium uppercase">{title}</p>
      </div>
      <hr className="my-2" />
      <div className="flex flex-wrap items-center justify-between text-white">
        {items.map((item) => {
          return (
            <div
              key={item.title}
              className="flex items-center justify-center flex-col"
            >
              <p className="text-sm font-light mx-1">{item.title}</p>
              <img
                src={iconUrlFromCode(item.icon)}
                alt="weather icon"
                className="w-20 h-20"
              />

              <p className="font-medium mx-1">{`${item.temp.toFixed()}°`}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Forecast;
