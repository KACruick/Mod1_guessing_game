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

askRange();

let numAttempts;

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

        if (isCorrect){
            console.log('You win!');
            rl.close();
        }else {
            askGuess();
        }
    });
}


//askGuess();