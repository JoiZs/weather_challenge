"use client";
import { ReqForecastWeather } from "@components/lib/reqwea";
import React, { useEffect, useState } from "react";
import moment from "moment";
import { CloudStatus } from ".";

type Props = {
  lat: string;
  long: string;
};

const Forecast = (props: Props) => {
  const [currTemp, setCurrTemp] = useState([]);

  useEffect(() => {
    if (props.long && props.lat) {
      (async () => {
        const res = await ReqForecastWeather(props.long, props.lat);
        console.log(res);

        setCurrTemp(res.list);
      })();
    }
  }, [props.lat, props.long]);

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
                  {parseInt(el.main.temp)}
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
