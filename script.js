var resistanceVar = document.getElementById("resistance").value;
var multiplierVar = 0;
var toleranceVar = document.getElementById("tolerance").value;
var band1colors = ["#000000", "#6e2c00", "#ff0000", "#ff8000", "#ffff00", "#008000", "#0000ff", "#800080", "#646464", "#ffffff"];
var band2colors = ["#000000", "#6e2c00", "#ff0000", "#ff8000", "#ffff00", "#008000", "#0000ff", "#800080", "#646464", "#ffffff"];
var band3colors = ["0filler", "#000000", "#6e2c00", "#ff0000", "#ff8000", "#ffff00", "#008000", "#0000ff"];
var band4colors = ["0filler", "#6e2c00", "#ff0000", "3filler", "4filler", "#cc9933", "6filler", "7filler", "8filler", "9filler", "c9cbcb"];
var multiplierOptions = [1, 10, 100, 1000, 10000, 100000, 1000000];
var toleranceOptions = [1, 2, 5, 10];
var multiplierArrayNum;
var band1Num;
var band2Num;
var band1and2;
var updateBandsCaller;

function updateBandsCall() {
  updateVars();
  updateBandsCaller = updateBands();
  updateBandsCaller = updateBands();
}

function updateBandsCallSpecial() {
  updateBandsCaller = updateBands();
  updateBandsCaller = updateBands();
}

function updateVars() {
  multiplierArrayNum = getMultiplier();
  if ((resistanceVar / multiplierVar).toString().length === 1) {
    band1Num = 0;
    band2Num = resistanceVar / multiplierVar;
    band1and2 = Number(band1Num + "" + band2Num);
  }
  else {
    var number = resistanceVar / multiplierVar;
    var output = [];
    var sNumber = number.toString();
    for (var i = 0, len = sNumber.length; i < len; i += 1) {
        output.push(+sNumber.charAt(i));
    }
    band1Num = output[0];
    band2Num = output[1];
    band1and2 = Number(band1Num + "" + band2Num);
  }
  toleranceVar = Number(document.getElementById("tolerance").value);
  resistanceVar = Number(document.getElementById("resistance").value);
}

function updateBands() {
  //Band 1
  document.getElementById("rect1").style.fill = band1colors[band1Num];
  //Band 2
  document.getElementById("rect2").style.fill = band2colors[band2Num];
  //Band 3
  document.getElementById("rect3").style.fill = band3colors[multiplierArrayNum];
  //Band 4
  document.getElementById("rect4").style.fill = band4colors[toleranceVar];
  return("done");
}

function goToResistor() {
  window.scrollTo(0, -100000);
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
      multiplierVar = multiplierNum;
      return(multiplierArrayNum);
    }
    if (multiplierNum === 1000000) {
      multiplierLoopGoing = false;
      multiplierVar = multiplierNum;
      return(multiplierArrayNum);
    }
  }
}

function rect1click() {
  band1Num = band1Num + 1;
  if (band1Num === 10) {
    band1Num = 0;
  }
  band1and2 = Number(band1Num + "" + band2Num);
  document.getElementById("resistance").value = band1and2 * multiplierVar;
  updateBandsCallSpecial()
}

function rect2click() {
  band2Num = band2Num + 1;
  if (band2Num === 10) {
    band2Num = 1;
  }
  band1and2 = Number(band1Num + "" + band2Num);
  document.getElementById("resistance").value = band1and2 * multiplierVar;
  updateBandsCallSpecial()
}

function rect3click() {
  if (multiplierOptions.indexOf(multiplierVar) + 1 > multiplierOptions.length) {
    multiplierVar = multiplierOptions[0];
  }
  else {
    multiplierVar = multiplierOptions[multiplierOptions.indexOf(multiplierVar) + 1];
  }
  multiplierArrayNum = multiplierOptions.indexOf(multiplierVar) + 1;
  band1and2 = Number(band1Num + "" + band2Num);
  document.getElementById("resistance").value = band1and2 * multiplierVar;
  updateBandsCallSpecial()
}

function rect4click() {
  if (toleranceOptions.indexOf(toleranceVar) + 1 > toleranceOptions.length) {
    toleranceVar = toleranceOptions[0];
  }
  else {
    toleranceVar = toleranceOptions[toleranceOptions.indexOf(toleranceVar) + 1];
  }
  document.getElementById("tolerance").value = toleranceVar.toString();
  updateBandsCallSpecial()
}
