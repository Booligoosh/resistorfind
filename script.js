var resistanceVar = document.getElementById("resistance").value;
var multiplierVar = 0;
var toleranceVar = document.getElementById("tolerance").value;
var band3colors = ["0filler", "#000000", "#6e2c00", "#ff0000", "#ff8000", "#ffff00", "#008000", "#0000ff"];
var band4colors = ["0filler", "#6e2c00", "#ff0000", "3filler", "4filler", "#cc9933", "6filler", "7filler", "8filler", "9filler", "c9cbcb"];
var multiplierArrayNum

function updateBands() {
  //Update vars
  toleranceVar = document.getElementById("tolerance").value;
  resistanceVar = document.getElementById("resistance").value;
  //Band 3
  document.getElementById("rect3").style.fill = band3colors[getMultiplier()];
  //Band 4
  document.getElementById("rect4").style.fill = band4colors[toleranceVar];
}

function getMultiplier() {
  var multiplierLoopGoing = true;
  var multiplierNum = 0.1;
  var multiplierArrayNum = 0;
  while (multiplierLoopGoing === true) {
    multiplierNum = multiplierNum * 10;
    multiplierArrayNum = multiplierArrayNum + 1;
    if ((resistanceVar / multiplierNum) % 1 === 0) {
      multiplierVar = multiplierNum;
    }
    else {
      multiplierLoopGoing = false;
      multiplierNum = multiplierNum / 10;
      multiplierArrayNum = multiplierArrayNum - 1
      multiplierVar = multiplierNum
      return(multiplierArrayNum);
    }
    if (multiplierNum === 1000000) {
      multiplierLoopGoing = false;
      multiplierVar = multiplierNum
      return(multiplierArrayNum);
    }
  }
}
