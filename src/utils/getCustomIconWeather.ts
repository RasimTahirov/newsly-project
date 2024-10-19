export const getCustomWeatherIconPatchNight = (weatherCondition: string) => {
  const icon = weatherCondition.toLocaleLowerCase().trim();

  const iconPatch = `../../public/assets/weather/night/${icon}.svg`;

  return iconPatch;
};

export const getCustomWeatherIconPatchDay = (weatherCondition: string) => {
  const icon = weatherCondition.trim();

  const iconPatch = `../../public/assets/weather/day/${icon}.svg`;

  return iconPatch;
};
