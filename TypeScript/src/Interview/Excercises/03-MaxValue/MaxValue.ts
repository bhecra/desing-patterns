const maxValue = (stocks: number[]) =>{

  const orderedArray = stocks.sort((a,b) => b-a)

  console.log({orderedArray});
   return orderedArray[0] - orderedArray[orderedArray.length-1]
  

}

console.log(maxValue([4, 3, 2, 5, 11]));
