const secretNumber = 10;

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

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

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
askGuess();