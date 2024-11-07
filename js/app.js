function displayContact() {
  var modal = document.getElementById("myModal");
  modal.style.display = "block";
}

function hideContact() {
  var modal = document.getElementById("myModal");
  modal.style.display = "none";
}

window.onclick = hideContactOnWindowClick

function hideContactOnWindowClick(event) {
  var modal = document.getElementById("myModal");
  if (event.target === modal) {
    modal.style.display = "none";
  }
}
