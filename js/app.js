//Kontakt
function displayContact() {
  var modal = document.getElementById("myModal");
  modal.style.display = "block";
}

function hideContact() {
  var modal = document.getElementById("myModal");
  modal.style.display = "none";
}

//Zamknięcie poza oknem
window.onclick = hideContactOnWindowClick

function hideContactOnWindowClick(event) {
  var modal = document.getElementById("myModal");
  if (event.target === modal) {
    modal.style.display = "none";
  }
  var modal = document.getElementById("MoreOnBSRA");
  if (event.target === modal) {
    modal.style.display = "none";
  }
  var modal = document.getElementById("MoreOnMocha");
  if (event.target === modal) {
    modal.style.display = "none";
  }
}

//BSRA
function displayInfoBSRA() {
  var modal = document.getElementById("MoreOnBSRA");
  modal.style.display = "block";
}
function hideInfoBSRA() {
  var modal = document.getElementById("MoreOnBSRA");
  modal.style.display = "none";
}


//Mocha
function hideInfoMocha() {
  var modal = document.getElementById("MoreOnMocha");
  modal.style.display = "none";
}

function displayInfoMocha() {
  var modal = document.getElementById("MoreOnMocha");
  modal.style.display = "block";
}




