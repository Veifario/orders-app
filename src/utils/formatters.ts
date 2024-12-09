export const divideToDischarges = (price: number): string | number => {
  return price ? Intl?.NumberFormat("ru")?.format(price) : 0;
};

