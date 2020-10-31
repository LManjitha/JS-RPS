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
    // console.log('computer choice :',botChoice);
    // console.log(results);
    message = finalMessage(results);
    rpsFrontend(humanChoice,botChoice,message);
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
    if(yourScore===0){
        return {'message':'You lost','color':'red'}
    }else if(yourScore===0.5){
        return {'message':'You tied','color':'yellow'}
    }else{
        return{'message':'You won','color':'green'}
    }
}

function rpsFrontend(yourChoice,botChoice,message){
    var imageDatabase = {
        'rock': document.getElementById('rock').src,
        'paper':document.getElementById('paper').src,
        'scissor':document.getElementById('scissor').src
    }

    //remove all images after click
    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissor').remove();

    var humanDiv = document.createElement('div');
    var botDiv = document.createElement('div');
    var messageDiv = document.createElement('div');
    //console.log(imageDatabase[botChoice]);
//     ../../static/images/rock.jpg
//     static/images/rock.jpg
    humanDiv.innerHTML = "<img src='"+imageDatabase[yourChoice]+"' height=150px weight=150px style='box-shadow: 0px 10px 58px rgba(37,50,233,1);'>"
    botDiv.innerHTML = "<img src='"+imageDatabase[botChoice]+"' height=150px weight=150px style='box-shadow: 0px 10px 58px rgba(243,38,24,1);'>"
    messageDiv.innerHTML = "<h1 style= 'color:"+message['color']+"; font-size:60px; padding:30px;'>" + message['message']+"</h1>"
    document.getElementById('flex-box-rps-div').appendChild(humanDiv);
    document.getElementById('flex-box-rps-div').appendChild(messageDiv);
    document.getElementById('flex-box-rps-div').appendChild(botDiv);
   
}

var all_buttons = document.getElementsByTagName('button');

var copyAllButtons = [];
for (let i=0;i<all_buttons.length;i++){
    copyAllButtons.push(all_buttons[i].classList[1]);
}

function buttonColorChange(btnClr){
    if(btnClr.value === 'red'){
        buttonRed();
    }else if(btnClr.value === 'green'){
        buttonGreen();
    }else if(btnClr.value === 'reset'){
        buttonReset();
    }else if(btnClr.value === 'random'){
        buttonRandom();
    }
}
//console.log(all_buttons[2].classList[1]);
function buttonRed(){
    for(let i=0;i<all_buttons.length;i++){
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add('btn-danger');
    }
}

function buttonGreen(){
    for(let i=0;i<all_buttons.length;i++){
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add('btn-success');
    }
}

function buttonReset(){
    for(let i=0;i<all_buttons.length;i++){
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add(copyAllButtons[i]);
    }
}

function buttonRandom(){
    var choices = ['btn-primary','btn-danger','btn-success','btn-warning'];
    for(let i=0;i<all_buttons.length;i++){
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add(choices[Math.floor(Math.random() * 4)]);
    }
}

