const hasBalancedBrackets = (word: string) => {
  const clearWord = word.trim();
  const openBrackets = [];
  const validBrackets = {
    '[': ']',
    '{': '}',
    '(': ')',
  };
  const isBrackets = {
    '[': true,
    ']': true,
    '{': true,
    '}': true,
    '(': true,
    ')': true,
  };

  let isBalanced = true;

  for (const letter of clearWord) {
    if(!isBrackets[letter]) continue;
    if (letter.trim()) {
      if (validBrackets[letter]) {
        openBrackets.push(letter);
      } else {
        if (validBrackets[openBrackets.pop()] !== letter) {
          isBalanced = false;
          break;
        }
      }
    }
  }

  return isBalanced;
};

// console.log(hasBalancedBrackets('{[}'));
// console.log(hasBalancedBrackets('{[]}'));
// console.log(hasBalancedBrackets('({[]})'));
console.log(hasBalancedBrackets('{ [ x ( [ { ( )[ Z ]{ } } x ] ) ] }'));
