"use client";
import React from "react";
import useStore from "@components/lib/usestore";
import { useLocStore } from "@components/stores/locatestore";

type Props = {};

const DisplayCard = (props: Props) => {
  const loc = useStore(useLocStore, (state) => state.LocateCity);
  console.log(loc);
  return <div>{loc ? loc.name : "Loading"}</div>;
};

export default DisplayCard;
