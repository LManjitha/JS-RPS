//Age in Days
function ageInDays(){
var birthYear = prompt("What is your birth year?") ;
var ageDays = (2020- birthYear)*365;
var h1 = document.createElement('h1');
var textAnswer = document.createTextNode('You are ' + ageDays + 'days');
h1.setAttribute('id','ageDays');
h1.appendChild(textAnswer);
document.getElementById('flex-box-result').appendChild(h1);
//console.log(ageDays);
}

function reset(){
    document.getElementById('ageDays').remove();
}

function generateCat(){
    var image = document.createElement('img');
    var div = document.getElementById('flex-cat-gen');
    image.src = "static/images/lotr.jpg";
    image.className = "img";
    div.appendChild(image);
}

function rps(yourChoice){
    var  humanChoice,botChoice;
    humanChoice = yourChoice.id;
    botChoice = numberToChoice(randToRpsInt());
    // console.log(botChoice);
    results = decideWinner(humanChoice,botChoice);
    console.log('computer choice :',botChoice);
    console.log(results);
    //message = finalMessage(results);
    //rpsFrontend(yourChoice,botChoice,meesage);
}

function randToRpsInt(){
    return Math.floor(Math.random()*3);
}

function numberToChoice(number){
    return ['rock','paper','scissor'][number];
}

function decideWinner(yourChoice,computerChoice){
    var rpsDatabase={
        'rock': {'scissor':1,'rock':0.5,'paper':0},
        'paper':{'rock':1,'paper':0.5,'scissor':0},
        'scissor':{'paper':1,'scissor':0.5,'rock':0}
    }

    var yourScore = rpsDatabase[yourChoice][computerChoice];
    var computerScore = rpsDatabase[computerChoice][yourChoice];

    return [yourScore,computerScore];
}

function finalMessage([yourScore,computerScore]){
    
}

