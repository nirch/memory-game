
export function shuffleArray(array) {
    let currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
}

// Break a number to its divisors. For example:
// 12: [1, 12], [2, 6], [3, 4]
// 10: [1, 10], [2, 5]
function numToDivisors(num) {
  const divisors = [];
  const savedBigDivisors = {};

  for (let i = 1; i < num && !savedBigDivisors[i]; i++) {
    if (num % i === 0) {
      divisors.push([i, num / i]);
      savedBigDivisors[num / i] = true;
    }
  }

  return divisors;
}

// The function receives the size of the board (x, y) and the number of cards that needs to be
// on the boards. It assumes that the cards are sqaure and returns how the size of each cards and
// how the should be palced on the borad to utilize the maximum area. The output is an object
// with the following data:
// cardSize - the size of the card side
// rows - the number of card rows in the board
// columns - the number of card columns in the board
// yGutters - the gutters on the top and bottom of the board
// xGutters - the gutters on the left and right of the board
export function calcSide(x, y, numOfCards) {
  const totalArea = x * y;
  const maxCardSize = Math.sqrt(totalArea / numOfCards);
  const rowColummOptions = numToDivisors(numOfCards);

  // Out of the different options to organize the numOfCards on this specific board (rowColummOptions), 
  // finding the optimal cardSize and will utilize the maximum area
  let rowColumnIndex = -1;
  let cardSize = 0;
  for (const [index, rowColumn] of rowColummOptions.reverse().entries()) {
      const [rows, columns] = rowColumn;

      const optionalSize1 = Math.max(x, y) / Math.max(rows, columns) <= maxCardSize ? 
          Math.max(x, y) / Math.max(rows, columns) : undefined;
      const optionalSize2 = Math.min(x, y) / Math.min(rows, columns) <= maxCardSize ? 
          Math.min(x, y) / Math.min(rows, columns) : undefined;

      if (optionalSize1 && optionalSize2 && Math.max(optionalSize1, optionalSize2) > cardSize) {
          cardSize = Math.max(optionalSize1, optionalSize2);
          rowColumnIndex = index;
      } else if (optionalSize1 && optionalSize1 > cardSize) {
          cardSize = optionalSize1;
          rowColumnIndex = index;
      } else if (optionalSize2 && optionalSize2 > cardSize) {
          cardSize = optionalSize2;
          rowColumnIndex = index;
      }
  }

  const rows = x > y ? Math.min(rowColummOptions[rowColumnIndex][0], rowColummOptions[rowColumnIndex][1]) :
      Math.max(rowColummOptions[rowColumnIndex][0], rowColummOptions[rowColumnIndex][1]);
  const columns = x > y ? Math.max(rowColummOptions[rowColumnIndex][0], rowColummOptions[rowColumnIndex][1]) :
   Math.min(rowColummOptions[rowColumnIndex][0], rowColummOptions[rowColumnIndex][1]);

  let yGutters = (y - cardSize * rows) / 2;
  let xGutters = (x - cardSize * columns) / 2;

  return {cardSize, rows, columns, yGutters, xGutters};
}