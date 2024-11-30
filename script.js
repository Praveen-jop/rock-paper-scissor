console.log('This is a rock paper scissor game')

const R = 'rock'
const P = 'paper'
const S = 'scissor'

function getcomputerchoice(){
    let num = Math.floor((Math.random() * 100) + 1);
    let choice
    if(num>=10 && num<30){
        choice = 'rock'
    }
    else if(num>=30 && num<65){
        choice = 'paper'
    }
    else{
        choice = 'scissor'
    }
    return choice
}

function gethumanchoice(){
    value = prompt("Choose any one [Rock,Paper,Scissor]", "Type here")
    value = value.toUpperCase()
    let choice
    if(value == "ROCK"){
        choice = 'rock'
    }
    else if(value == "PAPER"){
        choice = 'paper'
    }
    else if(value == "SCISSOR"){
        choice = 'scissor'
    }
    else{
        console.log("type correct choice!")
        choice = 0
    }
    return choice
}

let human_point = 0
let computer_point = 0
let i = 1
while(i<3){
    console.log("Round: "+i)
    human = gethumanchoice()
    if(human == 0){
        continue
    }
    comp = getcomputerchoice()
    console.log("Your choice: "+ human)
    console.log("Computer choice: "+ comp)

    // game
    if(human == 'paper' && comp == 'scissor'){
        computer_point++
        console.log("Computer got a point!")
    }
    else if(human == 'scissor' && comp == 'rock'){
        computer_point++
        console.log("Computer got a point!")
    }
    else if(human == 'rock' && comp == 'paper'){
        computer_point++
        console.log("Computer got a point!")
    }
    else if(comp == 'paper' && human == 'scissor'){
        human_point++
        console.log("You won! you got a point!")
    }
    else if(comp == 'scissor' && human == 'rock'){
        human_point++
        console.log("You won! you got a point!")
    }
    else if(comp == 'rock' && human == 'paper'){
        human_point++
        console.log("You won! you got a point!")
    }
    else{
        console.log("it's a tie, round will repeat once again")  
        continue      
    }
    console.log("Scores after round: "+i+" is:")
    console.log("You:"+human_point,", Computer:"+computer_point)
    i++

}
console.log("Game Over!")
if(human_point > computer_point){
    console.log("congratulations! You Won the game!")
}
else{
    console.log("sorry! Computer won the game.")
}