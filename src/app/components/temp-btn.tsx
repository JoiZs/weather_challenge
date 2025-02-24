"use client";

import * as React from "react";
import { Thermometer } from "lucide-react";

import { Button } from "../../components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../../components/ui/dropdown-menu";
import { useStore } from "zustand";
import { useLocStore } from "@components/stores/locatestore";

export function TempToggle() {
  const updateTemp = useStore(useLocStore, state=>state.updateTemp)

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Thermometer className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Thermometer className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() =>updateTemp('F') }>
          Fahrenheit
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => updateTemp('C')}>
          Celcius
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
