"use client";
import React, { useEffect } from "react";
import useStore from "@components/lib/usestore";
import { useLocStore } from "@components/stores/locatestore";
import ReqWeather from "@components/lib/reqwea";

type Props = {};

const DisplayCard = (props: Props) => {
  const loc = useStore(useLocStore, (state) => state.LocateCity);

  useEffect(() => {
    if (loc) {
      (async () => {
        const res = await ReqWeather(loc.long, loc.lat);
        console.log(res);
      })();
    }
  }, [loc]);

  return (
    <div className="flex-1 grid grid-cols-1 grid-rows-3 md:grid-cols-2 md:grid-rows-2">
      <div>{loc ? loc.name : "Loading"}</div>
      <div>2</div>
      <div>3</div>
    </div>
  );
};

export default DisplayCard;
