import axios from "axios";
import { FtoC } from "./tempconv";
import { ForecastWeatherRes, WeatherRes } from "@components/types";

const ReqWeather = async (lon: string, lat: string, temp: "C" | "F") => {
  const url = `https://api.openweathermap.org/data/2.5/weather?units=imperial&lat=${lat}&lon=${lon}&appid=${process.env.NEXT_PUBLIC_OPENWEATHER_API}`;

  try {
    const {data}:{data: WeatherRes} = await axios({
      method: "get",
      url: url,
    });

    if (temp == "C") {
      data.main.feels_like = FtoC(data.main.feels_like);
      data.main.temp = FtoC(data.main.temp);
      data.main.temp_max = FtoC(data.main.temp_max);
      data.main.temp_min = FtoC(data.main.temp_min);
    }

    return data;
  } catch (error) {
    if (error) return null;
  }
};

export const ReqForecastWeather = async (lon: string, lat: string,temp: "C"|"F") => {
  const url = `https://api.openweathermap.org/data/2.5/forecast?&units=imperial&lat=${lat}&lon=${lon}&appid=${process.env.NEXT_PUBLIC_OPENWEATHER_API}`;

  try {
    const {data}:{data:ForecastWeatherRes} = await axios({
      method: "get",
      url: url,
    });

    if (temp =="C"){
      data.list.forEach(el => {
        
      el.main.feels_like = FtoC(el.main.feels_like);
      el.main.temp = FtoC(el.main.temp);
      el.main.temp_max = FtoC(el.main.temp_max);
      el.main.temp_min = FtoC(el.main.temp_min);
        
      });
    }

    return data;
  } catch (error) {
    if (error) return null;
  }
};

export default ReqWeather;
