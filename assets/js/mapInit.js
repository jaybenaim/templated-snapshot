function loadScript() {
  let script = document.createElement("script");
  script.type = "text/javascript";
  script.src =
    "https://maps.googleapis.com/maps/api/js?v=3" +
    "&key=" +
    "AIzaSyCK6DLE3xe5jcRyXojMt4rr7SZZQLc3R7o" +
    "&libraries=places&callback=initMap"; //& needed
  document.body.appendChild(script);
}

window.onload = loadScript;
