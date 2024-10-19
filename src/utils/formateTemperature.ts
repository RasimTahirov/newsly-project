export const formateTemperature = (temp: number) => {
  const temperature = Math.floor(Number(temp));
  return temperature >= 0 ? `${temperature}` : `${temperature}`;
};
