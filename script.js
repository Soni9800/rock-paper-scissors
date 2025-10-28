let user=0;
let computer=0;
const choices=document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScore=document.querySelector("#uScore");
const compScore=document.querySelector("#cScore");

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);
    });
});

const genCompChoice=()=>{
    let options=["rock","paper","scissors"];
    const randIndex=Math.floor(Math.random() * 3);
    return options[randIndex];
}

const showWinner=(userWin,userChoice,compChoice)=>{
if(userWin){
    user++;
    userScore.innerText=user;
    console.log("You Win !! ");
    msg.innerText=`You Win!! Your ${userChoice} beats ${compChoice}`;
 msg.style.backgroundColor="green";
}else{
    computer++;
    compScore.innerText=computer;
    console.log("Computer Win !!");
        msg.innerText=`Computer Win!!${compChoice} beats ${userChoice}`;

    msg.style.backgroundColor="red";

}
}


const playGame=(userChoice)=>{
console.log(" Your choice is : " , userChoice);
const compChoice= genCompChoice();
console.log("Computer choice is :" , compChoice);

if(userChoice === compChoice){
    console.log("IT'S A TIE !");
    msg.innerText="IT'S A TIE !!";
     msg.style.backgroundColor="#081b31";


}else{
    let userWin=true;
    if(userChoice==="rock"){
        userWin= compChoice==="paper"? false:true;
    }else if(userChoice==="paper"){
        userWin= compChoice==="scissors"?false:true;
    }else{
        userWin=compChoice==="rock"?false:true;
    }
   
showWinner(userWin,userChoice,compChoice); 
}
}