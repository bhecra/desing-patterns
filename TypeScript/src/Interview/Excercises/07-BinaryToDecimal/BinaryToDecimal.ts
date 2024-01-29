const binaryToDecimal = (binaryNumber: string) => {
  let decimal = 0;

  for (let index = 0; index < binaryNumber.length; index++) {
    const element = binaryNumber[index];
    decimal += Math.pow(2, binaryNumber.length - index-1) * +element;
  }
  return decimal;
};

const binaryToDecimalRec = (binary) => {
  const sum = Math.pow(2, binary.length - 1) * binary[0]
  if (binary.length !== 1) {
      return sum + binaryToDecimalRec(binary.slice(1));
  }
  return sum
}


console.log(binaryToDecimal('11010'));
