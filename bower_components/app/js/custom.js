//Initialize google maps
function initMap() {
        var uluru = {lat: -25.363, lng: 131.044};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 4,
          center: uluru
        });
        var geocoder = new google.maps.Geocoder();
        document.getElementById('submit').addEventListener('click', function() {
          geocodeAddress(geocoder, map);
        });
      }

//Search location by address in google maps
function geocodeAddress(geocoder, resultsMap) {
  var address = document.getElementById('address').value;
  geocoder.geocode({'address': address}, function(results, status) {
    if (status === 'OK') {
      resultsMap.setCenter(results[0].geometry.location);
      var marker = new google.maps.Marker({
        map: resultsMap,
        position: results[0].geometry.location
      });
    } else {
      alert('Geocode was not successful for the following reason: ' + status);
    }
  });
}


  $("#login").click(function(){
       var loginp = document.getElementById('loginpnl');
       var searchp = document.getElementById('searchpnl');
       //if(loginp.display == none){
          var section = document.getElementById('mySection');
          section.remove();
           $("#loginpnl").slideToggle('slow');
        //}
      })

      $("#search").click(function(){
       var loginp = document.getElementById('loginpnl');
       var searchp = document.getElementById('searchpnl');
        //if(searchp.display==none){
          var section = document.getElementById('mySection');
          section.remove();
          $("#searchpnl").slideToggle('slow');
        //}
      })

//Validate credit card number/iban

//Validate expiration date








