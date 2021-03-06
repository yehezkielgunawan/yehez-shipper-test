// Just a helper function to format the Date
export const formatDate = (date: string | Date, time = true): string => {
  const convertedDate = new Date(date);
  const options: Intl.DateTimeFormatOptions = {
    day: "numeric",
    month: "long",
    year: "numeric",
  };
  const optionsWithoutTime: Intl.DateTimeFormatOptions = {
    day: "numeric",
    month: "numeric",
    year: "numeric",
  };
  return convertedDate.toLocaleDateString(
    "id-ID",
    time ? options : optionsWithoutTime
  );
};
