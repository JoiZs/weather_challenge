"use client";
import { Search, Navigation } from "lucide-react";

import { Button } from "@components/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "@components/components/ui/dialog";
import { Input } from "@components/components/ui/input";
import { Label } from "@components/components/ui/label";
import { DialogClose, DialogDescription, DialogTitle } from "@radix-ui/react-dialog";
import { useRef, useState } from "react";
import { ReqCityNames } from "@components/lib/reqcity";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@components/components/ui/tooltip";

import { useLocStore } from "@components/stores/locatestore";
import { useStore } from "zustand";

export function SearchButton() {
  const [tempCity, setTempCity] = useState<[]>([]);
  const CityInp = useRef<HTMLInputElement>(null);

  const setLocCity = useStore(useLocStore, (state) => state.setLocateCity);

  const CityAutoCompleteHandler = async () => {
    const name = CityInp.current!.value;
    const res = await ReqCityNames(name);
    setTempCity(res);
  };

  return (
    <Dialog
      onOpenChange={(e) => {
        if (e) {
          setTempCity([]);
        }
      }}
    >
      <DialogTrigger asChild>
        <Button size={"icon"} variant={"outline"}>
          <Search />
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-md w-full p-0 py-4">
        <DialogHeader className="py-2">
          <DialogTitle hidden className="">
            Search
          </DialogTitle>
          <DialogDescription hidden>
            Search the city by name..
          </DialogDescription>
        </DialogHeader>
        <div className="flex items-center space-x-2 px-4 py-2">
          <div className="flex flex-1 flex-col">
            <div className="flex flex-row">
              <Label htmlFor="city" className="sr-only">
                City
              </Label>
              <Input
                onKeyUp={async (e) => {
                  if (e.key == "Enter") {
                    await CityAutoCompleteHandler();
                  }
                }}
                ref={CityInp}
                className="border-0 focus-visible:ring-offset-0 focus-visible:ring-0"
                id="city"
                placeholder="Search by city..."
              />
              <Button
                onClick={CityAutoCompleteHandler}
                size={"sm"}
                variant={"outline"}
              >
                <Search />
              </Button>
            </div>
            <div className="px-4 ">
              {tempCity.length > 0 ? (
                <ul className="text-xs flex gap-4 flex-col">
                  {tempCity.map((el) => (
                    <li
                      className="flex items-center hover:cursor-pointer  flex-row flex-wrap gap-2"
                      key={el.place_id}
                    >
                      <Navigation size={12} />
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger>
                          <DialogClose asChild>    
                            <Button
                              variant={"ghost"}
                              size={"sm"}
                              onClick={() => {
                                console.log(el);
                                setLocCity({
                                  name: el.address.city || el.display_place,
                                  long: el.lon,
                                  lat: el.lat,
                                });
                              }}
                              asChild
                            >
                              <span>
                                {el.display_name.length > 35
                                  ? (el.display_name as string).slice(0, 35) +
                                    "..."
                                  : el.display_name}
                              </span>
                            </Button>
                            </DialogClose>
                          </TooltipTrigger>

                          <TooltipContent className="max-w-xs">
                            <span className=" text-wrap">
                              {el.display_name}
                            </span>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </li>
                  ))}
                </ul>
              ) : (
                <span className="text-xs">No result found...</span>
              )}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
