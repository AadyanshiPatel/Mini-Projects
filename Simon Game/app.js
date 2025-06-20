let gameseq=[];
let userseq=[];

let start=false;
let level=0;

let btn=['red','yellow','green','purple'];

let h2=document.querySelector('h2');

document.addEventListener('keypress',function(){
    if(start==false){
        console.log("Game Started");
        start=true;
    }

    levelUp();
});

function btnFlash(btn1){
    btn1.classList.add("flash");
    setTimeout(function(){
        btn1.classList.remove("flash");
    },300);
};

function levelUp(){
    userseq=[];
    level++;
    h2.innerText=`Level ${level}`;

    //select random button
    let randInd=Math.floor(Math.random()*3);
    let randColor=btn[randInd];
    let randbtn=document.querySelector(`.${randColor}`);
    // console.log(randInd);
    // console.log(randColor);
    // console.log(randbtn);
    gameseq.push(randColor);
    console.log(gameseq);
    btnFlash(randbtn);
}

function checkAns(idx){
    console.log(level);
    

    if(gameseq[idx]==userseq[idx]){
        if(userseq.length==gameseq.length){
            setTimeout(levelUp,1000);
        }
    }else{
        h2.innerHTML=`Game Over.Your Score is <b>${level}</b>.<br>Press Any Key To Start The Game!`;
        document.querySelector('body').style.backgroundColor='red';
        setTimeout(function(){
            document.querySelector('body').style.backgroundColor='white';
        },200);
        reset();
    }
}
function btnPress(){
    let btn=this;
    // console.log(this);
    btnFlash(btn);

    userColor=btn.getAttribute("id");
    userseq.push(userColor);
    console.log(userseq);

    checkAns(userseq.length-1);
}

let allBtns=document.querySelectorAll('.btn');
for(allBtn of allBtns){
    allBtn.addEventListener('click',btnPress);
}

function reset(){
    gameseq=[];
    userseq=[];

    start=false;
    level=0;
}