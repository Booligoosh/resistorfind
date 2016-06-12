var resitance = document.getElementById("resistance").value;
var multiplier = 0;
var tolerance = document.getElementById("tolerance").value;
var band3colors = ["0filler", "#000000", "#6e2c00", "#ff0000", "#ff8000", "#ffff00", "#008000", "#0000ff"];
var band4colors = ["0filler", "#6e2c00", "#ff0000", "3filler", "4filler", "#cc9933", "6filler", "7filler", "8filler", "9filler", "c9cbcb"];


function updateBands() {
  //Update vars
  resitance = document.getElementById("resistance").value;
  tolerance = document.getElementById("tolerance").value;
  getMultiplier();
  //Band 3
  document.getElementById("rect3").style.fill = band3colors[multiplierArrayNum];
  //Band 4
  document.getElementById("rect4").style.fill = band4colors[tolerance];
}

function getMultiplier() {
  var multiplierLoopGoing = true;
  var multiplierNum = 0.1;
  var multiplierArrayNum = 0;
  while (multiplierLoopGoing === true) {
    multiplierNum = multiplierNum * 10;
    multiplierArrayNum = multiplierArrayNum + 1;
    if ((tolerance / multiplierNum) % 1 === 0) {
      multiplier = multiplierNum;
    }
    else {
      multiplierLoopGoing = false;
      multiplierNum = multiplierNum / 10;
      multiplierArrayNum = multiplierArrayNum - 1;
    }
    if (multiplierNum === 1000000) {
      multiplierLoopGoing = false;
    }
  }
}
