"use client";
import React, { useEffect, useState } from "react";
import useStore from "@components/lib/usestore";
import { useLocStore } from "@components/stores/locatestore";
import ReqWeather from "@components/lib/reqwea";
import { ShiftTz } from "@components/lib/shifttz";
import { Separator } from "@components/components/ui/separator";
import { Badge } from "@components/components/ui/badge";
import {
  ArrowDown,
  ArrowUp,
  Droplets,
  TrendingDown,
  Wind,
} from "lucide-react";
import Forecast from "./forecast";
import CloudStatus from "./cloudstatus";
import { WeatherRes } from "@components/types";

const DisplayCard = () => {
  const loc = useStore(useLocStore, (state) => state.LocateCity);
  const temp = useStore(useLocStore, state=>state.temp)
  const [currTemp, setCurrTemp] = useState<WeatherRes|null>(null);

  useEffect(() => {
    if (loc && temp) {
      (async () => {
        const res = await ReqWeather(loc.long, loc.lat, temp);
        console.log(res);
        if (res){
          setCurrTemp(res);
        }
        
      })();
    }
  }, [loc, temp]);

  if (!currTemp || !loc || !temp) return <div className="flex justify-center items-center h-full"><span>Loading</span></div>

  return (
    <div className="flex-1 grid grid-cols-1 grid-rows-3 md:grid-cols-2 md:grid-rows-2">
      {/* 
      <div>{loc ? loc.name : "Loading"}</div>
       */}
      <div className="flex flex-col justify-center items-center col-span-2 md:col-span-1">
        <h1 className="text-lg font-light">{loc?.name}</h1>
        <span className="text-4xl font-semibold">{currTemp.main.temp} {temp}</span>
        <span className="text-sm">{ShiftTz(currTemp.timezone)}</span>
      </div>

      <div className="flex gap-2 flex-col h-full justify-center max-w-xs w-full m-auto">
        <div className="font-light italic text-sm col-span-3 gap-1 flex justify-center items-center">
          <div>
            <span className="opacity-50">feels like: </span>
            {currTemp.main.feels_like} {temp},{" "}
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
            <span>{currTemp.main.temp_max} {temp}</span>
          </div>
          <Separator orientation="vertical" />
          <div className="flex flex-row gap-2 items-center">
            <ArrowDown size={12} />
            <span>{currTemp.main.temp_min} {temp}</span>
          </div>
        </div>
      </div>
      <Forecast lat={loc.lat} long={loc.long} temp={temp} />
    </div>
  );
};

export default DisplayCard;
