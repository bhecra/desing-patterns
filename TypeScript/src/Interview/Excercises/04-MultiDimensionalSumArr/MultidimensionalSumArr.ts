type MatrizDeNumeros = Array<number> | Array<Array<number>>;

const sumAllArray = (array: any) => {
  let sum = array[0];
  for (let index = 0; index < array.length - 1; index++) {
    sum += array[index + 1];
  }
  return sum;
};

const mdSumArray = (array: any) => {
  let sum = 0;

  for (let index = 0; index < array.length; index++) {

    if (Array.isArray(array[index])) {
      sum += mdSumArray(array[index]);
    } else {
      sum += array[index];
    }
  }
  return sum;
};

console.log(mdSumArray([1, 2, 3, 4]));
console.log(mdSumArray([[2, 4], [1], [4, 2, 1]]));
console.log(mdSumArray([ 2, [3,4], 5, [-3, [6 , [ 4,5 ] ] ] ]));
