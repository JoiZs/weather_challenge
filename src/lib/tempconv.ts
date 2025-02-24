export const FtoC = (temp: number) => {
  return Math.round((((temp - 32) * 5) / 9) * 100) / 100;
};
