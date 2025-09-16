let userScore=0;
let compScore=0;

const choices=document.querySelectorAll('.choice');
const msg =document.querySelector('#msg');

const userScorepara =document.querySelector('#user-score');
const compScorepara =document.querySelector('#comp-score');

const generateCompChoice=()=>{
//rocck paper scissors
const options=['rock','paper','scissors'];
const randIdx=Math.floor(Math.random()*3);
return options[randIdx];
}

const drawgame=()=>{
    msg.innerText="Game was Drawn. Play again!";
    msg.style.backgroundColor="#081b31";
};
const showWinner=(userWin, userChoice,compChoice)=>{
    if(userWin){
       userScore++;
       userScorepara.innerText=userScore;
        msg.innerText=`You Won! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
    }
    else{
         compScore++;
            compScorepara.innerText=compScore;
        msg.innerText=`You lost. ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor="red";
    }
};
const playGame=(userChoice)=>{
    console.log("userchoice=", userChoice);
//generate computer choice -> modular
const compChoice=generateCompChoice();
console.log("compchoice=", compChoice);

if(userChoice===compChoice){
    drawgame();
}
else{
    let userWin=true;
    if(userChoice==="rock"){
        //scissors,paper
       userWin= compChoice==="paper"? false:true;
    }
    else if(userChoice==="paper"){
        //rock,scissors
        userWin= compChoice==="scissors"? false:true;
    }else{
        //rock,paper
       userWin= compChoice==="rock"? false:true;
    }
    showWinner(userWin,userChoice, compChoice);
}
};
choices.forEach(choice=>{
    choice.addEventListener('click',()=>{
        const userChoice=choice.getAttribute('id');
        console.log("choices wasv clicked", userChoice);
        playGame(userChoice);
    });
});

// Removed global play function for HTML onclick