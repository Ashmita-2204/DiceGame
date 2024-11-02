
var randomNumber1=Math.random();
randomNumber1= Math.floor((randomNumber1*6)+1);

var randomNumber2=Math.random();
randomNumber2= Math.floor((randomNumber2*6)+1);


if(randomNumber1===1){
    document.querySelector(".img1").setAttribute("src","./images/dice1.png");
}

if(randomNumber1===2){
    document.querySelector(".img1").setAttribute("src","./images/dice2.png");
}

if(randomNumber1===3){
    document.querySelector(".img1").setAttribute("src","./images/dice3.png");
}

if(randomNumber1===4){
    document.querySelector(".img1").setAttribute("src","./images/dice4.png");
}

if(randomNumber1===5){
    document.querySelector(".img1").setAttribute("src","./images/dice5.png");
}

if(randomNumber1===6){
    document.querySelector(".img1").setAttribute("src","./images/dice6.png");
}



if(randomNumber2===1){
    document.querySelector(".img2").setAttribute("src","./images/dice1.png");
}

if(randomNumber2===2){
    document.querySelector(".img2").setAttribute("src","./images/dice2.png");
}

if(randomNumber2===3){
    document.querySelector(".img2").setAttribute("src","./images/dice3.png");
}

if(randomNumber2===4){
    document.querySelector(".img2").setAttribute("src","./images/dice4.png");
}

if(randomNumber2===5){
    document.querySelector(".img2").setAttribute("src","./images/dice5.png");
}

if(randomNumber2===6){
    document.querySelector(".img2").setAttribute("src","./images/dice6.png");
}


if(randomNumber1===randomNumber2){
    document.querySelector(".container h1").textContent="Draw q==p";
}

if(randomNumber1>randomNumber2){
    document.querySelector(".container h1").textContent="Player 1 Wins  ; )";
}

if(randomNumber1<randomNumber2){
    document.querySelector(".container h1").textContent="Player 2 Wins *o-o*";
}