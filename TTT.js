let boxes = document.querySelectorAll('.box');
let msgContainer = document.getElementsByClassName('msg-container')[0];
let resetBtn = document.getElementById('reset-btn');
let newBtn = document.getElementById('new-btn');
let msg = document.getElementById('msg');

let turnO =true;//player X,player O

const winPatters = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

boxes.forEach(box => {
    box.addEventListener('click',()=>{
        console.log("box was clicked");
            if(turnO){
                //playerO
                box.innerText = "O";
                turnO = false;
            }else{
                //playerX
                box.innerText = "X";
                turnO = true;
            }
            box.disabled = true;

            checkWin();
    });
});

const checkWin = () =>{
    for( pattern of winPatters){
            let pos1Val = boxes[pattern[0]].innerText;
            let pos2Val = boxes[pattern[1]].innerText;
            let pos3Val = boxes[pattern[2]].innerText;
    
        if(pos1Val != ""&& pos2Val !=""&& pos3Val !=""){
            if(pos1Val === pos2Val && pos2Val===pos3Val){
                console.log("Winner", pos1Val);
                showWinner(pos1Val); 
            }
        }
    }
};

const showWinner = (winner) => {
    msg.innerText = `Congratulations, the winner is ${winner}`;
    msgContainer.classList.remove("hide");
}

resetBtn.addEventListener('click',()=>{
    msgContainer.classList.add("hide");
    resetGame();
});

resetBtn.addEventListener('click',()=>{
    msgContainer.classList.add("hide");
    resetGame();
});

newBtn.addEventListener('click',()=>{
    msgContainer.classList.add("hide");
    resetGame();
});


const resetGame = () => {
    boxes.forEach(box => {
        box.innerText = "";
        box.disabled = false;
    });
}
