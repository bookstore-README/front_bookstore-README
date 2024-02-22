export const convertDate = (orderDate: string) => {
  const date = new Date(orderDate);
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  return {
    year,
    month,
    day,
  };
};

export type convertDateType = {
  year: number;
  month: number;
  day: number;
};
