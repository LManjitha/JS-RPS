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
    //results = deciedWinner(humanChoice,botChoice);
    //message = finalMessage(results);
    //rpsFrontend(yourChoice,botChoice,meesage);
}