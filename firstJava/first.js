let secretNumber = 5
let stringGuess=prompt("Guess a number");
let Guess = Number(stringGuess);
if ((Guess)===secretNumber)
{
    alert("You guessed right!");
} else if ((Guess)>secretNumber)
{
    alert("You guessed wrong!");
} else {
    alert("wrong, try again");
};

