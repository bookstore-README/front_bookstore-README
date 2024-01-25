export const getDateAgo = (days: number) => {
  let dateCopy = new Date();
  let priorDate = new Date(new Date().setDate(dateCopy.getDate() - days));
  return priorDate;
};
