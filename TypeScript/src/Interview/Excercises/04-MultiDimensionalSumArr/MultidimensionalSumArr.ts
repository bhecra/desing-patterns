type NumberOrArray = number | NumberOrArray[];
type NestedArray = NumberOrArray[];

const mdSumArray = (array: NestedArray): number => {
  let sum = 0;

  for (let index = 0; index < array.length; index++) {
    if (Array.isArray(array[index])) {
      // Asegúrate de que array[index] sea de tipo NestedArray
      sum += mdSumArray(array[index] as NestedArray);
    } else {
      sum += array[index] as number;
    }
  }

  return sum;
};

console.log(mdSumArray([1, 2, 3, 4]));
console.log(mdSumArray([[2, 4], [1], [4, 2, 1]]));
console.log(mdSumArray([2, [3, 4], 5, [-3, [6, [4, 5]]]]));
