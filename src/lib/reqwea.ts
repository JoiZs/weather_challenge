import axios from "axios";

const ReqWeather = async (lon: string, lat: string) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?units=imperial&lat=${lat}&lon=${lon}&appid=${process.env.NEXT_PUBLIC_OPENWEATHER_API}`;

  try {
    console.log(url);
    const res = await axios({
      method: "get",
      url: url,
    });
    return res.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export default ReqWeather;
