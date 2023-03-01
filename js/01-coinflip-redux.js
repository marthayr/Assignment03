let coinFlip;

let x = parseInt(prompt('How many rounds do you want to play?'))
console.log(x);

for(let i=0; i<x; i++){
    coinFlip = Math.round(Math.random());
    if(coinFlip == 0){
        console.log("Round " +(i+1) + ": Heads");
    }
    else{
        console.log("Round " +(i+1) + ": Tails");
    }
}