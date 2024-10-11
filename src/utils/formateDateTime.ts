export const formateDateTime = (dateTime: string) => {
  const date = new Date(dateTime);
  const formattedDate = date.toISOString().split('T')[0];
  const formattedTime = date.toTimeString().split(':').slice(0, 2).join(':');

  return `${formattedDate} / ${formattedTime}`;
};
