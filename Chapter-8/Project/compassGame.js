let won = document.getElementById('isWon');
let topBTN = document.getElementById('topBTN');
let middleBTN = document.getElementById('middleBTN');
let bottomBTN = document.getElementById('bottomBTN');
let restartBTN = document.getElementById('restart');
let updateBTN = document.getElementById('updateForm');
let north = document.getElementById('top');
let east = document.getElementById('right');
let west = document.getElementById('left');
let south = document.getElementById('bottom');
let topInput = document.getElementById('topForm');
let leftInput = document.getElementById('leftForm');
let rightInput = document.getElementById('rightForm');
let bottomInput = document.getElementById('bottomForm');

function shuffleBTN(){
  let directions = [north.innerHTML, east.innerHTML, west.innerHTML, south.innerHTML];
  for(let i = directions.length-1; i > 0; --i){
    let ri = Math.floor(Math.random() * (i+1));
    let temp = directions[i];
    directions[i] = directions[ri];
    directions[ri] = temp;
  }
  north.innerHTML = directions[0];
  east.innerHTML = directions[1];
  west.innerHTML = directions[2];
  south.innerHTML = directions[3];
  won.innerHTML = '';
  isWon();
}

function isWon(){
  if(east.innerHTML === 'E' && west.innerHTML === 'W' && north.innerHTML === 'N' && south.innerHTML === 'S'){
    won.innerHTML = "<h2>You Won!<h2>";
    topBTN.disabled = true;
    middleBTN.disabled = true;
    bottomBTN.disabled = true;
    restartBTN.disabled = false;
  }

}
// this function gets the form data and displays in the compass
function updatePosition(form) {
  north.innerHTML = topInput.value.toUpperCase();
  east.innerHTML = rightInput.value.toUpperCase();
  west.innerHTML = leftInput.value.toUpperCase();
  south.innerHTML = bottomInput.value.toUpperCase();
  topInput.disabled = true;
  leftInput.disabled = true;
  rightInput.disabled = true
  bottomInput.disabled = true;
  updateBTN.disabled = true;
  restartBTN.disabled = true;
  topBTN.disabled = false;
  middleBTN.disabled = false;
  bottomBTN.disabled = false;
  topInput.value = '';
  rightInput.value = '';
  leftInput.value = '';
  bottomInput.value = '';
  isWon();
}
// This function changes the location of the left and top ooptions of the compass
function changeTopPosition() {
  let direction = west.innerHTML;
  west.innerHTML = north.innerHTML;
  north.innerHTML = direction;
  isWon();
}
// This function change the location of the right and left options on the compass
function changeMiddlePosition() {
  let direction = west.innerHTML;
  west.innerHTML = east.innerHTML;
  east.innerHTML = direction;
  isWon();
}
//This function changes the right and bottom options on the compass
function changeBottomPosition() {
  let direction = south.innerHTML;
  south.innerHTML = east.innerHTML;
  east.innerHTML = direction;
  isWon();
}
// This function enables the text areas and update button on the form as well it clears the compass
function restart() {
  north.innerHTML = '';
  west.innerHTML = '';
  east.innerHTML = '';
  south.innerHTML = '';
  won.innerHTML = '';
  topInput.disabled = false;
  leftInput.disabled = false;
  rightInput.disabled = false;
  bottomInput.disabled = false;
  updateBTN.disabled = false;
}