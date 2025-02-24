import React from "react";
import { ModeToggle, SearchButton } from ".";


const Nav = () => {
  return (
    <div className="flex justify-between">
      <h1>WeatherApp_.</h1>
      <div className="gap-2 flex">
        <ModeToggle />
        <SearchButton />
      </div>
    </div>
  );
};

export default Nav;
