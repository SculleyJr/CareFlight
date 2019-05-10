function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

var map;
function initMap() {
  var uluru = {lat: 39.090517, lng: -108.562416};
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 39.090517, lng: -108.562416},
    zoom: 8
  });
  var marker = new google.maps.Marker({position : uluru, map: map})
}