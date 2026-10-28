var events = [];

function addEvent() {
  var eventName = document.getElementById("event").value;

  if (eventName == "") {
    alert("Please enter an event name.");
    return;
  }

  if (events.length == 3) {
    alert("You can join a maximum of 3 events.");
    return;
  }

  events.push(eventName);
  document.getElementById("event").value = "";
  alert("Event Added");
}

function confirmRegistration() {
  var name = document.getElementById("studentName").value;

  if (name == "") {
    alert("Please enter your name.");
    return;
  }
  if (events.length == 0) {
    alert("Please add at least one event.");
    return;
  }

  localStorage.setItem("name", name);
  localStorage.setItem("events", JSON.stringify(events));

  window.location.href = "confirm.html";
}
