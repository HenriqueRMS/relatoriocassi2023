
var modal1 = document.getElementById("directors-modal");


var btn = document.getElementById("executive-directors");


var span = document.getElementsByClassName("close")[0];


var closeModalBtn = document.getElementById("closeModalBtn");


btn.onclick = function() {
  modal1.style.display = "block";
}


span.onclick = function() {
  modal1.style.display = "none";
}


closeModalBtn.onclick = function() {
  modal1.style.display = "none";
}


window.onclick = function(event) {
  if (event.target == modal) {
    modal1.style.display = "none";
  }
}


/*MODAL CONSELHO DELIBERATIVO*/


var modal2 = document.getElementById("deliberative-modal");


var btn2 = document.getElementById("deliberative-council");


var span = document.getElementsByClassName("close")[1];


var closeModalBtn2 = document.getElementById("closeModalBtn2");


btn2.onclick = function() {
  modal2.style.display = "block";
}


span.onclick = function() {
  modal2.style.display = "none";
}


closeModalBtn2.onclick = function() {
  modal2.style.display = "none";
}


window.onclick = function(event) {
  if (event.target == modal) {
    modal2.style.display = "none";
  }
}


/*MODAL EXPEDIENTE*/


var modal3 = document.getElementById("file-modal");


var btn3 = document.getElementById("team-file");


var span = document.getElementsByClassName("close")[2];


var closeModalBtn3 = document.getElementById("closeModalBtn3");


btn3.onclick = function() {
  modal3.style.display = "block";
}


span.onclick = function() {
  modal3.style.display = "none";
}


closeModalBtn3.onclick = function() {
  modal3.style.display = "none";
}


window.onclick = function(event) {
  if (event.target == modal) {
    modal3.style.display = "none";
  }
}






