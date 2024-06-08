let Randnum = document.getElementById("RandNum");
let num =Math.floor(Math.random()*5)+1;
let GuessNum = document.getElementById("GuessNum");
let Result = document.getElementById("result");
let gameChance = 5;
let GameChance = document.getElementById("gameChance");

let Rules = document.getElementById("rules");
Rules.style.display="none";
GameChance.innerHTML="You have "+gameChance+" life left";
function generateRandomNumber() {
    num = Math.floor(Math.random()*5)+1;
    console.log(num);
    
    
    
    
    if(Number(GuessNum.value)===num){
        Result.innerHTML="Congratulation";
    }
    else{
        gameChance--;
        GameChance.innerHTML="You have "+gameChance+" life left";
        
    }

    if(gameChance==0){
        document.getElementById("gameover").style= "display: block";
        document.getElementById("game").style= "display: none"
    }
    GuessNum.value='';
    Randnum.innerHTML="Actual Value was "+num
    return num;
}



function hint(){
    if(GuessNum.value!=''){
        if(Number(GuessNum.value)<num){
            Result.innerHTML="Your Guessed value is Smaller";
        }
        else if(Number(GuessNum.value)>num){
            Result.innerHTML="Your Guessed Value is Greater";
        }
    }
    else{
        alert('Enter Value')
    }
}

function rulesGuide(){
    if (Rules.style.display === "none") {
        Rules.style.display = "block";
      } else {
        Rules.style.display = "none";
      }
}