// EXERCISE 1: Guess the random number
function guessNumberGame() {
    const target = Math.floor(Math.random() * 10) + 1;
    let guess = null;

    while (guess !== target) {
        if (guess < target) {
            console.log("Too low!");
        } else if (guess > target) {
            console.log("Too high!");
        }
        guess = parseInt(prompt("Guess a number between 1 and 10:"));
    }
    console.log("Congratulations! You guessed the number.");
}

guessNumberGame();

// EXERCISE 2: Create an array of random numbers
function generateRandomArray(length) {
    for (let i = 0; i < length; i++) {
        console.log(Math.floor(Math.random() * 100) + 1);
    }
}

generateRandomArray();
console.log("Array of random numbers generated.");
