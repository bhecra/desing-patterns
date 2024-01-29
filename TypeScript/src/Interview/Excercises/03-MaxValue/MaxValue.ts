export const maxValue = (stocks: number[]) => {
  const orderedArray = stocks.sort((a, b) => b - a);
  return orderedArray[0] - orderedArray[orderedArray.length - 1];
};

console.log(maxValue([4, 3, 2, 5, 11]));
