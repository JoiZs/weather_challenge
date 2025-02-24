"use client";
import { ReqForecastWeather } from "@components/lib/reqwea";
import React, { useEffect, useState } from "react";
import moment from "moment";
import { CloudStatus } from ".";
import { ForecastWeatherRes } from "@components/types";

type Props = {
  lat: string;
  long: string;
  temp: 'C'|'F';
};

const Forecast = (props: Props) => {
  const [currTemp, setCurrTemp] = useState<ForecastWeatherRes["list"]| undefined>(undefined);

  useEffect(() => {
    if (props.long && props.lat) {
      (async () => {
        const res = await ReqForecastWeather(props.long, props.lat, props.temp);
        if (res) setCurrTemp(res.list);
      })();
    }
  }, [props.lat, props.long, props.temp]);

  if (!currTemp || !props.long || !props.lat) return <>Hello</>;

  return (
    <div className="py-6 h-fit w-full justify-evenly col-span-2">
      <div className="flex p-0 gap-2 flex-row flex-1 w-full justify-evenly">
        {currTemp.map((el, idx) => {
          if ((idx + 2) % 7 == 0)
            return (
              <div key={el.dt} className="flex flex-col  gap-2">
                <span className="opacity-50 text-sm text-right">
                  {moment(el.dt_txt).format("ddd")}
                </span>
                <span className="text-center text-xl">
                  {el.main.temp}
                </span>
                <CloudStatus rate={el.clouds.all} />
              </div>
            );
        })}
      </div>
    </div>
  );
};

export default Forecast;
