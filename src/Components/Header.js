import { useState } from "react";
import { IoMenuSharp } from "react-icons/io5";

function Header({ setquery, formatBackground }) {
  const cities = [
    {
      title: "America",
      id: 1,
    },
    {
      title: "Tokyo",
      id: 2,
    },
    {
      title: "Shimla",
      id: 3,
    },
    {
      title: "Nepal",
      id: 4,
    },
    {
      title: "Paris",
      id: 5,
    },
  ];
  let [open, setOpen] = useState(false);
  
  return (
    <div className="shadow-md mx-1 my-6">
      <div className="md:flex items-center  ">
        <div className="flex items-center w-full  my-6">
          <div
            onClick={() =>  setOpen(!open)}
            className="text-3xl absolute  cursor-pointer"
          >
            <IoMenuSharp
              name={open ? "close" : "menu"}
              className="font-bold md:hidden "
            ></IoMenuSharp>
          </div>
          <h1 className=" font-medium text-xl  mx-12 text-yellow-400 ">
            Weather app
          </h1>
        </div>
        <div
          className={`flex md:flex-nowrap flex-wrap md::${formatBackground()} rounded items-center  md:my-0 my-7 md:pb-0 pb-12 absolute  md:static  md:z-auto z-[1] top-20 w-full md:w-auto md:pl-1 pl-8 transition-all duration-500 ease-in shadow-md md:shadow-none ${
            open ? "top-20 opacity-100" : "top-[990px]"
          }  md:opacity-100 `}
        >
          {cities.map((city) => {
            return (
              <button
                key={city.id}
                onClick={() => setquery({ q: city.title })}
                className={` text-lg md:text-white text-orange-500 hover:text-gray-400 duration-500 text-md mx-4 } `}
              >
                {city.title}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
export default Header;
