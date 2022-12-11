// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

function countOccurences(string, char) {
  let result = 0;
  for (let index = 0; index < string.length; index++) {
    if (string[index] === char) {
      result++;
    }
  }
  return result;
}

function checkIfWinner(string, char) {
  const threeConsecutiveChars = char + char + char;

  // check lines winner
  if (
    string.substring(0, 3) === threeConsecutiveChars ||
    string.substring(4, 7) === threeConsecutiveChars ||
    string.substring(8, 11) === threeConsecutiveChars
  ) {
    return true;
  }

  // check columns winner
  if (
    (string[0] === char && string[4] === char && string[8] === char) ||
    (string[1] === char && string[5] === char && string[9] === char) ||
    (string[2] === char && string[6] === char && string[10] === char)
  ) {
    return true;
  }

  // check diagonals winner
  if (
    (string[0] === char && string[5] === char && string[10] === char) ||
    (string[2] === char && string[5] === char && string[8] === char)
  ) {
    return true;
  }

  // if it passes all above conditions
  return false;
}

function solution(input) {
  // Write your code here
  let invalidGrids = 0;
  let winsFor_X = 0;
  let winsFor_O = 0;

  for (let index = 0; index < input.length; index++) {
    let numberOf_X = countOccurences(input[index], 'x');
    let numberOf_O = countOccurences(input[index], 'o');

    // Invalid grid
    if (Math.abs(numberOf_X - numberOf_O) > 1) {
      invalidGrids++;
      continue;
    }

    const is_X_winner = checkIfWinner(input[index], 'x');
    const is_O_winner = checkIfWinner(input[index], 'o');

    // Invalid grid
    if (is_X_winner && is_O_winner) {
      invalidGrids++;
      continue;
    }

    if (is_X_winner) winsFor_X++;
    if (is_O_winner) winsFor_O++;
  }

  // Tie games won't be shown in the console output
  return `x: ${winsFor_X} o: ${winsFor_O} invalid: ${invalidGrids}`;
}

const inputString =
  'xxo xxo xxo\n' +
  'xox oxo x--\n' +
  'ooo x-- xx-\n' +
  'xxx ooo ---\n' +
  'oox xox --x\n' +
  'xox xoo oxx';

const arr = inputString.trim().split('\n');

console.log(solution(arr));
