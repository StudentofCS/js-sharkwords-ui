const ALPHABET = 'abcdefghijklmnopqrstuvwxyz';

const WORDS = [
  'strawberry',
  'orange',
  'apple',
  'banana',
  'pineapple',
  'kiwi',
  'peach',
  'pecan',
  'eggplant',
  'durian',
  'peanut',
  'chocolate',
];

let numWrong = 0;
let correctGuesses = 0;

// For now, we'll hardcode the word that the user has to guess
// You can change this to choose a random word from WORDS once you
// finish this lab but we hard code it so we know what the word is
// and can tell if things look correct for this word
const word = 'hello';

// Loop over the letters in `word` and create divs.
// The divs should be appended to the section with id="word-container".
//
// Use the following template string to create each div:
// `<div class="letter-box ${letter}"></div>`
//
function createDivsForChars() {
  // Replace this with your code
  const wordContainer = document.querySelector('#word-container')

  for (const letter of word) {
      wordContainer.insertAdjacentHTML('beforeend', 
        `<div class="letter-box ${letter}"></div>`);      
  }
}

// Loop over each letter in the alphabet and generate a button for each letter
// The buttons should be appended to the section with id="letter-buttons".
function generateLetterButtons() {
  // Replace this with your code
  const letterButtons = document.querySelector('#letter-buttons')

  for (const letter of ALPHABET) {
    letterButtons.insertAdjacentHTML('beforeend', `<button>${letter}</button`)
  }

}

// Set the `disabled` property of `buttonEl` to true.
//
// `buttonEl` is an `HTMLElement` object.
//
function disableLetterButton(buttonEl) {
  // Replace this with your code
  buttonEl.setAttribute('disabled', 'true')

}

// This is a helper function we will use in the future
// It should return `true` if `letter` is in the word
// For now, you should test it out to make sure it works
function isLetterInWord(letter) {
  // Replace this with your code
  if (word.includes(letter)) {
    return true;
  }
  else {
    return false;
  }
}

// This function is called to start the game.
function startGame() {
  createDivsForChars();
  generateLetterButtons();

  // in the next lab, you will be adding functionality to handle when
  // someone clicks on a letter
}

startGame(); // Call startGame() when the page loads.
