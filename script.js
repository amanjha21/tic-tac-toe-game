const sections = document.querySelectorAll('[cell]')
let currentTurn='x';
const restartButton = document.getElementById('reset');
const winningCombinations=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

startGame();
function startGame(){
    currentTurn='x';
    document.getElementById('currentPlayer').innerText=currentTurn.toUpperCase()+ "'s Turn";
    document.getElementById('message').classList.remove('show');

document.getElementById('gameWindow').classList.add('x');

sections.forEach(cell=>{
    cell.classList.remove('x','o');
    cell.addEventListener('click',handleClick, {once:true});
    
})}


function handleClick(e){
const cell = e.target;
cell.classList.add(currentTurn);
//check 4 win
if (checkWin(currentTurn)){
    let winningText = 'is Winner';
    if (currentTurn=='x'){
        winningText='X is winner';
    }else{
        winningText='O is winner';
    }
    document.getElementById('text').innerText=winningText;
    document.getElementById('message').classList.add('show');
    restartButton.addEventListener('click',resetGame);
}else if (checkDraw()){
    document.getElementById('text').innerText='Draw';
    document.getElementById('message').classList.add('show');
    restartButton.addEventListener('click',resetGame);
}else{

swapTurn();
document.getElementById('currentPlayer').innerText=currentTurn.toUpperCase()+ "'s Turn";
swapHover();}
}
function swapTurn(){
    if(currentTurn=='x'){
        currentTurn='o';
    }else{
        currentTurn='x';
    }
}

function swapHover(){
  let gameWindow =document.getElementById('gameWindow');
  if(currentTurn=='o'){
    gameWindow.classList.remove('x');
    gameWindow.classList.add('o');
}else{
    gameWindow.classList.remove('o');
    gameWindow.classList.add('x');
}
  
}

function checkWin(currentTurn){
   return winningCombinations.some(combination=>{
        return combination.every(index =>{
            return sections[index].classList.contains(currentTurn)
        })
    })
}
function checkDraw(){
    return [...sections].every(cell=>{
return cell.classList.contains('o') || cell.classList.contains('x')
        
     })
 }
 function resetGame(){
     startGame();
     console.log('click')
 }