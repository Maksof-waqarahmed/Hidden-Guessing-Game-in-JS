// let guessChar;
// const hiddenChar = 'd';

// do {
//     guessChar = prompt("Please Enter any char: ");
//     if (guessChar === hiddenChar) {
//         alert("You Win");
//     } else if (guessChar === String.fromCharCode(hiddenChar.charCodeAt(0) - 1) || guessChar === String.fromCharCode(hiddenChar.charCodeAt(0) + 1)) {
//         alert("You lose but you are closer to the hidden number");
//     }
// } while (guessChar !== hiddenChar);


// let guessChar;
// const hiddenChar = 'd';
// const hiddenCharCode = hiddenChar.charCodeAt(0);
// let guessCharCode;
// let counter = 1;

// do {
//     guessChar = prompt("Please Enter any char: ");
//     guessCharCode = guessChar.charCodeAt(0);

//     if (guessChar === hiddenChar) {
//         alert("You Win");
//     } else if (guessCharCode === hiddenCharCode - 1 || guessCharCode === hiddenCharCode + 1) {
//         alert("You lose but you are closer to the hidden number");
//     }

//     if (counter == 5) {
//         break;
//     }

//     counter++

// } while (guessChar !== hiddenChar);




