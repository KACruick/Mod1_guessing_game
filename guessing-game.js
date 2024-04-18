const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// let minRange = 0;
// let maxRange = 100;

let secretNumber;

function randomInRange(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}
//console.log(randomInRange(3,4));

// const askRange = () => {
//     rl.question("Enter a min number ", (minAnswer) => {
//         const min = Number(minAnswer);
//         rl.question("Enter a max number ", (maxAnswer) => {
//             const max = Number(maxAnswer);
//             console.log("I'm think of a number between " + min + " and " + max);
//         });
//     });
//     let secretNumber = randomInRange(minAnswer,maxAnswer);
//     askGuess(secretNumber);
// }

let numAttempts;

function askRange() {
    rl.question('Enter a min number: ', (minAnswer) => {
        const min = Number(minAnswer);
        rl.question('Enter a max number: ', (maxAnswer) => {
            const max = Number(maxAnswer);
            console.log("I'm thinking of a number between " + min + " and " + max);
            secretNumber = randomInRange(min, max);
            askGuess(secretNumber);
            
        });
    });
}

//askRange();


function askLimit() {
//allow user to specify the number of attempts
//potential order: askLimit, askRange, askGuess
    rl.question("Enter how many guesses are allowed: ", (answer) => {
        numAttempts = answer;
        askRange();
    });
    
}
askLimit();

function checkGuess(number) {   //if 
    if(number > secretNumber){
    console.log('Too high.');
    return false;
} else if (number < secretNumber){
    console.log('Too low.');
    return false;
} else {
    console.log('Correct!')
    return true; //potential edge case maybe?
    }
}

function askGuess(){ 

    rl.question('Enter a guess: ',(answer) => {
        const guess = Number(answer);
        const isCorrect = checkGuess(guess);

        if (isCorrect == true){
            console.log('You win!');
            rl.close();
        } 
        if (isCorrect == false && numAttempts > 1) {
            askGuess();
            numAttempts --;
        }
        else {
            rl.close();
            console.log("Too many guesses. You lose");
        }
    });
    
}  


//askGuess();