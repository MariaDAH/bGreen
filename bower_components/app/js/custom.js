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


//Upload picture
$(document).on('change', ':file', function() {

        var input = $(this),
        numFiles = input.get(0).files ? input.get(0).files.length : 1,
        label = input.val().replace(/\\/g, '/').replace(/.*\//, '');
        input.trigger('fileselect', [numFiles, label]);
        $('#filetext').attr('value',label);

      });

      $(document).ready(function(){

          $(':file').on('fileselect', function(event, numFiles, label) {

              console.log(numFiles);
              console.log(label);
          });

          $('#selectimg').on('click', function(){

                var img=$('input:file').val();
                console.log(img);
                $("#avatar").attr('src',img);

          });

      });



  $("#login").click(function(){
       var section = document.getElementById('mySection');
       if(section != undefined)
       {
         section.remove();
       }
       $("#searchpnl").hide();
       $("registerpnl").hide();
       $("signuppnl").hide();
       $("#loginpnl").slideToggle('slow');
      })

      $("#search").click(function(){

        var section = document.getElementById('mySection');
        if(section != undefined)
        {
          section.remove();
        }
         $("#loginpnl").hide();
         $("registerpnl").hide();
         $("signuppnl").hide();
         $("#searchpnl").slideToggle('slow');
      })

      $("#register").click(function(){
        var section = document.getElementById('mySection');
        if(section != undefined)
        {
          section.remove();
        }
         $("#loginpnl").hide();
         $("searchpnl").hide();
         $("signuppnl").hide();
         $("#registerpnl").slideToggle('slow');
      })

        $("#signup").click(function(){
        var section = document.getElementById('mySection');
        if(section != undefined)
        {
          section.remove();
        }
        $("#loginpnl").hide();
        $("searchpnl").hide();
        $("registerpnl").hide();
        $("#signuppnl").slideToggle('slow');
      })


//Validate credit card number/iban

//Validate expiration date








