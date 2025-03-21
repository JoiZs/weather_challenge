import { CityNameRes } from "@components/types";
import axios from "axios";

export const ReqCityNames = async (name: string): Promise<CityNameRes[]|undefined> => {
  const url = `https://api.locationiq.com/v1/autocomplete?key=${process.env.NEXT_PUBLIC_LOCATIONIQ_API}&q=${name}&limit=3`;

  try {
    const {data}:{data:CityNameRes[]} = await axios({
      method: "get",
      url: url,
    });

    // return array of city names with 3 limit
    return data;
  } catch (err) {
    // If any request errors occur: return empty array
    if (err) return undefined
  }
};
