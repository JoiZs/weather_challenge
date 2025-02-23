import axios from "axios";

export const ReqCityNames = async (name: string): Promise<any[]> => {
  const url = `https://api.locationiq.com/v1/autocomplete?key=${process.env.NEXT_PUBLIC_LOCATIONIQ_API}&q=${name}&limit=3`;

  try {
    const res = await axios({
      method: "get",
      url: url,
    });
    return res.data as any[];
  } catch (error) {
    return [];
  }
};
