export const getCustomWeatherIconPatchNigth = (weatherCondition: string) => {
  const icon = weatherCondition.toLocaleLowerCase();

  const iconPatch = `../../public/assets/weather/night/${icon}.svg`;

  return iconPatch;
};

export const getCustomWeatherIconPatchDay = (weatherCondition: string) => {
  const icon = weatherCondition.toLocaleLowerCase();

  const iconPatch = `../../public/assets/weather/day/${icon}.svg`;

  return iconPatch;
};
