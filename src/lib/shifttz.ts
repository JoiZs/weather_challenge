import moment from "moment-timezone";

export const ShiftTz = (sec: number) => {
  return moment
    .utc()
    .utcOffset(sec / 60)
    .format("LT");
};
