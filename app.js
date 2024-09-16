let gameSeq=[];
let userSeq=[];

let started=false;
let level=0;
let btns=["red","green","purple","blue"];
h2=document.querySelector("h2");

document.addEventListener("click",function(){
    if(started==false){
        console.log("game started");
        started=true;

        levelup();
    }
});

function gameFlash(btn){
    btn.classList.add("gameflash");
    setTimeout(function(){
        btn.classList.remove("gameflash");
    },250);
}

function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },250);
}

function levelup(){
    level++;
    h2.innerText = `Level ${level}`;

    let randIdx=Math.floor(Math.random()*3);
    let randCol=btns[randIdx];
    let randBtn=document.querySelector(`.${randCol}`);
    gameSeq.push(randCol);
    console.log(gameSeq);
    gameFlash(randBtn);
}

function btnPress(){
    console.log("this");
    let btn=this;
    userFlash(btn);
}

let allBtns=document.querySelector(".btn");
for(btn of btns){
    btn.addEventListener("click",btnPress);
}