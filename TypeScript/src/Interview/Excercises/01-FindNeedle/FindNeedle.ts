const findNeedle = (haystack: string, needle: string) => {
  for (
    let haystackIndex = 0;
    haystackIndex < haystack.length;
    haystackIndex++
  ) {
    for (let needleIndex = 0; needleIndex < needle.length; needleIndex++) {
      // console.log({ needleIndex, haystackIndex });

      if (haystack[haystackIndex + needleIndex] != needle[needleIndex]) break;
      if (needleIndex + 1 === needle.length) return haystackIndex;
    }
  }

  return -1;
};
const findNeedle2 = (haystack: string, needle: string) => {
  for (
    let haystackIndex = 0;
    haystackIndex < haystack.length;
    haystackIndex++
  ) {
    const slicedWord = haystack.slice(haystackIndex, haystackIndex + needle.length);

    if (slicedWord === needle) {
      return haystackIndex;
    } else {
      continue;
    }
  }
  return -1;
};

console.log(findNeedle('react-redux', 'redux'));
console.log(findNeedle2('react-redux', 'redux'));
