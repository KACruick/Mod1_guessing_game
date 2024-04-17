const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let minRange = 0;
let maxRange = 100;

const secretNumber = randomInRange(minRange, maxRange)

function randomInRange(min, max) {

    return Math.floor(Math.random() * (max - min) + min);
    // function getRandomIntInclusive(min, max) {
    //     const minCeiled = Math.ceil(min);
    //     const maxFloored = Math.floor(max);
    //     return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); // The maximum is inclusive and the minimum is inclusive
    //   }
}

const askRange = () => {
    rl.question("Enter a min number", + (minAnswer) => {
        const min = Number(minAnswer);
        rl.question("Enter a max number", + (maxAnswer) => {
            const max = Number(maxAnswer);
            console.log("I'm think of a number between " + min + " and " + max);
        });
    });

    return (min, max);
}



// Const handleFirstQuestion = (answer) => {
// 	console.log(“hello” + answer);
// 	rl.question(“Where are you from?”, handleSecondQuestion);
// };

//  Const handleSecondQuestion = (answer) => {
// 	console.log(answer + “ is a great place!”);
// 	rl.question(“How are you doing? ”, handleThirdQuestion);
// };

//rl.question(“What is your name? “, handleFirstQuestion);



function checkGuess(number) {
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
    rl.question('Enter a guess: ', (answer) => {
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