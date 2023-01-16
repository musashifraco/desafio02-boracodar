var card = document.getElementById("card");
var vector360 = document.getElementById("vector360");
var closeButton = document.getElementById("closeButton");

closeButton.classList.add("displayNone");

function addOrRemoveCard360() {
  card.classList.toggle("card");
  card.classList.toggle("card360");
  closeButton.classList.toggle("displayNone");
  vector360.classList.toggle("displayNone");
}
