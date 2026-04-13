// // EXERCISE 1: Guess the random number
// function guessNumberGame() {
//     const target = Math.floor(Math.random() * 10) + 1;
//     let guess = null;

//     while (guess !== target) {
//         if (guess < target) {
//             console.log("Too low!");
//         } else if (guess > target) {
//             console.log("Too high!");
//         }
//         guess = parseInt(prompt("Guess a number between 1 and 10:"));
//     }
//     console.log("Congratulations! You guessed the number.");
// }
// guessNumberGame();

// EXERCISE 2: Create an array of random numbers
function generateRandomArray(length) {
    const array = [];
    for (let i = 0; i < length; i++) {
        array.push(Math.floor(Math.random() * 100) + 1);
    }
    return array;
}

console.log(generateRandomArray(5));

// EXERCISE 3: Calculate the sum of even numbers in the array
function generateRandomArray(length) {
    const array = [];
    for (let i = 0; i < length; i++) {
        array.push(Math.floor(Math.random() * 100) + 1);
    }
    return array;
}       
    
function sumEvenNumbers(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            sum += array[i];
        }
    }
    return sum;
}

console.log(sumEvenNumbers(generateRandomArray(5)));