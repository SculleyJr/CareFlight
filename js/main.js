var navIcon = document.querySelector('#hamburger-icon');
var navbar = document.querySelector('.navbar');

navIcon.addEventListener('click', function() {
  this.classList.toggle('open');

  // navbar.classList.toggle('navbar');
  // navbar.classList.toggle('mobile-nav');

  navbar.style.display = navbar.style.display === '' ? 'block' : '';
});

var map;
function initMap() {
  var uluru = { lat: 39.090517, lng: -108.562416 };
  map = new google.maps.Map(document.getElementById('map'), {
    center: { lat: 39.090517, lng: -108.562416 },
    zoom: 8
  });
  var marker = new google.maps.Marker({ position: uluru, map: map });
}
