const hasBalancedBrackets = (word: string) => {
  const clearWord = word.trim();
  const openBrackets = [];
  const validBrackets = {
    '[': ']',
    '{': '}',
    '(': ')',
  };

  let isBalanced = true;

  for (const letter of clearWord) {
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
console.log(hasBalancedBrackets('{ [ ( [ { ( )[ ]{ } } ] ) ] }'));
