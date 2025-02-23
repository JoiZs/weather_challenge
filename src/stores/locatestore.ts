import { create } from "zustand";
import { persist } from "zustand/middleware";

type LocateCity = {
  name: string;
  lat: string;
  long: string;
};

interface LocStoreInterface {
  LocateCity: LocateCity;
  setLocateCity: (nc: LocateCity) => void;
  setUpDefault: () => void;
}

// const useLocStore = create<LocStoreInterface>((set) => ({
//   LocateCity: {
//     name: "New York",
//     lat: "40.730610",
//     long: "-73.935242",
//   },
//   setUpDefault: () => {},
//   setLocateCity: (newCity: LocateCity) =>
//     set({
//       LocateCity: {
//         name: newCity.name,
//         lat: newCity.name,
//         long: newCity.long,
//       },
//     }),
// }));
//

export const useLocStore = create(
  persist<LocStoreInterface>(
    (set) => ({
      LocateCity: {
        name: "New York",
        lat: "40.730610",
        long: "-73.935242",
      },
      setUpDefault: () => {},
      setLocateCity: (newCity: LocateCity) =>
        set({
          LocateCity: {
            name: newCity.name,
            lat: newCity.lat,
            long: newCity.long,
          },
        }),
    }),
    {
      name: "weather-loc-store",
    },
  ),
);
