import axios from "axios";

export const ReqCityNames = async (name: string) => {
  const url = `https://api.locationiq.com/v1/autocomplete?key=${process.env.NEXT_PUBLIC_LOCATIONIQ_API}&q=${name}`;
  console.log(url);
};
