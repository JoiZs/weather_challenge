export type WeatherRes ={
    "coord": {
       "lon":number,
       "lat":number
    },
    "weather": [
       {
          "id":number,
          "main": string,
          "description": string,
          "icon": string,
       }
    ],
    "base": string,
    "main": {
       "temp": number,
       "feels_like":number,
       "temp_min":number,
       "temp_max":number,
       "pressure":number,
       "humidity": number,
       "sea_level": number,
       "grnd_level":number, }
    "visibility": number,
    "wind": {
       "speed": number,
       "deg": number,
       "gust": number
    },
    "rain": {
       "1h":number
    },
    "clouds": {
       "all":number
    },
    "dt": number,
    "sys": {
       "type": number,
       "id": number,
       "country": string,
       "sunrise": number,
       "sunset":number,
    },
    "timezone": number,
    "id": number,
    "name": string,
    "cod":number
 }
 
 export type ForecastWeatherRes = {
         "cod":string,
         "message": number,
         "cnt": number,
         "list": [
             {
                 "dt": number,
                 "main": {
                     "temp": number,
                     "feels_like": number,
                     "temp_min": number,
                     "temp_max":number,
                     "pressure": number,
                     "sea_level": number,
                     "grnd_level": number,
                     "humidity": number,
                     "temp_kf": number
                 },
                 "weather": [
                     {
                         "id": number,
                         "main": string,
                         "description": string,
                         "icon": string,
                     }
                 ],
                 "clouds": {
                     "all":number
                 },
                 "wind": {
                     "speed": number,
                     "deg": number,
                     "gust": number
                 },
                 "visibility": number,
                 "pop": number,
                 "sys": {
                     "pod": string
                 },
                 "dt_txt": string
             },
         ],
         "city": {
             "id": number,
             "name": string,
             "coord": {
                 "lat":number,
                 "lon":number,
             },
             "country": string,
             "population": number,
             "timezone": number,
             "sunrise": number,
             "sunset":number
         }
 }


 export type CityNameRes= {
    place_id: string;
    osm_id: string;
    osm_type: "way";
    licence: string;
    lat: string;
    lon: string;
    bounding_box: [string, string, string, string];
    class: "tourism";
    type: "attraction";
    display_name: string;
    display_place: string;
    display_address: string;
    address:{
        name: string;
        road: string;
        neighbourhood: string;
        suburb: string;
        city: string;
        county: string;
        state: string;
        postcode: string;
        country: string;
        country_code: string;
    }
  };
  