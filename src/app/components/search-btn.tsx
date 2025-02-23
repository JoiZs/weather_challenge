"use client";
import { Search } from "lucide-react";

import { Button } from "../../components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "../../components/ui/dialog";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import { DialogTitle } from "@radix-ui/react-dialog";
import { ChangeEvent } from "react";
import { ReqCityNames } from "../../lib/reqcity";

export function SearchButton() {
  const CityAutoCompleteHandler = async (e: ChangeEvent<HTMLInputElement>) => {
    const name = e.currentTarget.value;
    await ReqCityNames(name);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size={"icon"} variant={"outline"}>
          <Search />
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-md w-full p-0 py-4">
        <DialogTitle className="hidden">Search</DialogTitle>
        <div className="flex items-center space-x-2 px-4">
          <div className="flex flex-1 flex-col">
            <Label htmlFor="city" className="sr-only">
              City
            </Label>
            <Input
              onChange={CityAutoCompleteHandler}
              className="border-0 focus-visible:ring-offset-0 focus-visible:ring-0"
              id="city"
              placeholder="Search by city..."
            />
            <div className="px-4">
              <ul>
                <li>1</li>
                <li>1</li>
                <li>1</li>
              </ul>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
