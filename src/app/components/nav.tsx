import React from "react";
import { ModeToggle, SearchButton } from ".";

type Props = {};

const Nav = (props: Props) => {
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
