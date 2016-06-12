var resitance = document.getElementById("resistance").value;
var tolerance = document.getElementById("tolerance").value;
var band4colors = ["0filler", "#6e2c00", "#ff0000", "3filler", "4filler", "#cc9933", "6filler", "7filler", "8filler", "9filler", "c9cbcb"];


function updateBands() {
  //Update vars
  resitance = document.getElementById("resistance").value;
  tolerance = document.getElementById("tolerance").value;
  //Band 4
  document.getElementById("rect4").style.fill = band4colors[tolerance];
}

