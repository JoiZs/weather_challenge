import { CloudSun, Cloudy, SunMedium } from "lucide-react";
import React from "react";

type Props = {
  rate: number;
};

const CloudStatus = ({ rate }: Props) => {
  if (rate < 25)
    return (
      <div className="flex flex-row items-center gap-2">
        <SunMedium size={12} />
        <span className="text-xs">Sunny</span>
      </div>
    );
  else if (rate < 50) {
    <div className="flex flex-row items-center gap-2">
      <CloudSun size={12} />
      <span className="text-xs">Few Cloud</span>
    </div>;
  } else
    return (
      <div className="flex flex-row items-center gap-2">
        <Cloudy size={12} />
        <span className="text-xs">Cloudy</span>
      </div>
    );
};

export default CloudStatus;
