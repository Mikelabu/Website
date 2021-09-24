"use strict";
// Display date and time on Movie screening pages
document.getElementById("timebtn").onclick = displayDate;

function displayDate() {
  document.getElementById("dateTime").innerHTML = Date();
}

