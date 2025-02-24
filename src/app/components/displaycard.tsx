"use client";
import React, { useEffect, useState } from "react";
import useStore from "@components/lib/usestore";
import { useLocStore } from "@components/stores/locatestore";
import ReqWeather, { ReqForecastWeather } from "@components/lib/reqwea";
import { ShiftTz } from "@components/lib/shifttz";
import { Separator } from "@components/components/ui/separator";
import { Badge } from "@components/components/ui/badge";
import {
  ArrowDown,
  ArrowUp,
  Droplet,
  Droplets,
  TrendingDown,
  Wind,
} from "lucide-react";
import Forecast from "./forecast";
import CloudStatus from "./cloudstatus";

type Props = {};

const DisplayCard = (props: Props) => {
  const loc = useStore(useLocStore, (state) => state.LocateCity);
  const [currTemp, setCurrTemp] = useState(null);

  useEffect(() => {
    if (loc) {
      (async () => {
        const res = await ReqWeather(loc.long, loc.lat);
        console.log(res);

        setCurrTemp(res);
      })();
    }
  }, [loc]);

  if (!currTemp || !loc) return <>Hello</>;

  return (
    <div className="flex-1 grid grid-cols-1 grid-rows-3 md:grid-cols-2 md:grid-rows-2">
      {/* 
      <div>{loc ? loc.name : "Loading"}</div>
       */}
      <div className="flex flex-col justify-center items-center col-span-2 md:col-span-1">
        <h1 className="text-lg font-light">{loc?.name}</h1>
        <span className="text-4xl font-semibold">{currTemp.main.temp} F</span>
        <span className="text-sm">{ShiftTz(currTemp.timezone)}</span>
      </div>

      <div className="flex gap-2 flex-col h-full justify-center max-w-xs w-full m-auto">
        <div className="font-light italic text-sm col-span-3 gap-1 flex justify-center items-center">
          <div>
            <span className="opacity-50">feels like: </span>
            {currTemp.main.feels_like} F,{" "}
          </div>
          <CloudStatus rate={currTemp.clouds.all} />
        </div>
        <Separator />
        <div className="flex flex-row justify-evenly">
          <div className="flex gap-4 flex-col items-center">
            <Badge className="gap-2" variant={"secondary"}>
              <Droplets size={12} />
              <span>Humidity</span>
            </Badge>
            <span className="text-md font-extralight tracking-widest">
              {currTemp.main.humidity}%
            </span>
          </div>
          <Separator orientation="vertical" />
          <div className="flex gap-4 flex-col items-center">
            <Badge className="gap-2" variant={"secondary"}>
              <Wind size={12} />
              <span>Wind</span>
            </Badge>
            <span className="text-md font-extralight tracking-widest">
              {currTemp.wind.speed}Mil/h
            </span>
          </div>
          <Separator orientation="vertical" />
          <div className="flex gap-4 flex-col items-center">
            <Badge className="gap-2" variant={"secondary"}>
              <TrendingDown size={12} />
              <span>Pressure</span>
            </Badge>
            <span className="text-md font-extralight tracking-widest">
              {currTemp.main.pressure}hPa
            </span>
          </div>
        </div>
        <Separator />
        <div className="flex gap-4 flex-row justify-center">
          <div className="flex flex-row gap-2 items-center">
            <ArrowUp size={12} />
            <span>{currTemp.main.temp_max} F</span>
          </div>
          <Separator orientation="vertical" />
          <div className="flex flex-row gap-2 items-center">
            <ArrowDown size={12} />
            <span>{currTemp.main.temp_min} F</span>
          </div>
        </div>
      </div>
      <Forecast lat={loc.lat} long={loc.long} />
    </div>
  );
};

export default DisplayCard;
