//console.log("js added");

let player1=Math.floor(Math.random()*6)+1;
let dice1="images/dice" + player1 +".png";
document.querySelectorAll("img")[0].setAttribute("src",dice1);


let player2=Math.floor(Math.random()*6)+1;
let dice2="images/dice" + player2 +".png";

document.querySelectorAll("img")[1].setAttribute("src",dice2);


if(player1>player2){
    document.querySelector("h1").innerText="Player 1 wins" ;
}
else if(player2>player1){
    document.querySelector("h1").innerText="Player 2 wins" ;
}
else{
    document.querySelector("h1").innerText="match drawn" ;
}