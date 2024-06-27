import React from "react";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Input({ setquery, units, setunits }) {
  const [city, setCity] = useState("");
  const handleSearchClick = () => {
    if (city !== "") setquery({ q: city });
  };
  const handleLocationClick = () => {
    if (navigator.geolocation) {
      toast.info("Fetching your location");
      navigator.geolocation.getCurrentPosition((position) => {
        toast.success("Successfully fetched your location");
        let lat = position.coords.latitude;
        let lon = position.coords.longitude;
        setquery({ lat, lon });
      });
    }
  };
  const handleUnitsChange = (e) => {
    const selectedUnits = e.target.name;
    if (units !== selectedUnits) setunits(selectedUnits);
  };
  return (
    <div className=" flex flex-wrap my-6">
      <div className="flex flex-row items-center md:w-1/2 justify-center space-x-2">
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="text-xl rounded font-light p-2 w-full shadow-xl focus:outline-none capitalize placeholder:lowercase"
          placeholder="search for city..."
        />

        <FaSearch
          size={30}
          onClick={handleSearchClick}
          className="text-white curser-pointer transition ease-out hover:scale-125 mx-4"
        />
        <FaLocationDot
          size={30}
          onClick={handleLocationClick}
          className="text-white curser-pointer transition ease-out hover:scale-125"
        />
      </div>
      <div className="flex flex-row items-center w-1/4 justify-center mx-6">
        <button
          name="metric"
          onClick={handleUnitsChange}
          className="text-white text-xl font-light hover:scale-125 transition ease-out"
        >
          °C
        </button>
        <p className="text-white text-xl mx-1">|</p>

        <button
          name="imperial"
          onClick={handleUnitsChange}
          className="text-white text-xl font-light hover:scale-125 transition ease-out"
        >
          °F
        </button>
      </div>
    </div>
  );
}
export default Input;
