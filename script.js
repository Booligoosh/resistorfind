var resitance = document.getElementById("resistance").value;
var tolerance = document.getElementById("tolerance").value;
var band4colors = ["#6e2c00", "#ff0000", 3, 4, "#cc9933", 6, 7, 8, 9, "c9cbcb"];


function updateBands() {
  //Update vars
  resitance = document.getElementById("resistance").value;
  tolerance = document.getElementById("tolerance").value;
  //Band 4
  document.getElementById("rect4").style.color = band4colors[tolerance];
}

