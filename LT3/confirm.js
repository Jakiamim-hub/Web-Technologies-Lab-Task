function showSummary() {
  var name = localStorage.getItem("name");
  var events = JSON.parse(localStorage.getItem("events"));

  var text = "Name: " + name + "<br>";
  text = text + "Events:<br>";

  for (var i = 0; i < events.length; i++) {
    text = text + events[i] + "<br>";
  }

  var total = events.length * 150;
  text = text + "Total Fee: " + total + " Taka";

  document.getElementById("summary").innerHTML = text;
}

function goBack() {
  window.location.href = "index.html";
}
