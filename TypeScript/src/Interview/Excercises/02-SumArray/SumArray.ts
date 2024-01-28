const sumArray = (array: number[], number: number) => {
  for (let index = 0; index < array.length - 1; index++) {
    const element = array[index];

    if (element + array[index + 1] == number) {
      return true;
    }
  }
  return false;
};
const sumArray2 = (array: number[], number: number) => {
  let start = 0;
  let end = array.length - 1;

  while (start < end) {
    if (array[start] + array[end] === number) return true;
    if (array[start] + array[end] < number) start++;
    if (array[start] + array[end] > number) end--;
  }

  return false;
};

console.log(sumArray2([2, 4, 5, 9], 9));
console.log(sumArray2([2, 4, 5, 9], 12));
