
function timeIt(){
  var sec=parseInt(document.getElementById("sec").innerText);
  var min=parseInt(document.getElementById("min").innerText);
  var hr=parseInt(document.getElementById("hr").innerText);
  var day=parseInt(document.getElementById("day").innerText);
  sec=sec-1;
  if(sec==0){
    min--;
    if(min==-1){
      hr--;
      if(hr==-1){
        day--;
        if(day==0){
          clearInterval(clock);
        }
        else{
          document.getElementById("day").innerText=day;
          document.getElementById("hr").innerText=24;
        }
      }
      else{
        document.getElementById("hr").innerText=hr;
        document.getElementById("min").innerText=60;
      }
    }
    else{
      document.getElementById("min").innerText=min;
      document.getElementById("sec").innerText=60;
    }
  }
  else{
    document.getElementById("sec").innerText=sec;
  }
}
var clock=setInterval(timeIt,1000);



function initMap() {
    // The location of Uluru
    var uluru = {lat: -25.344, lng: 131.036};
    // The map, centered at Uluru
    var map = new google.maps.Map(
        document.getElementById('map'), {zoom: 4, center: uluru});
    // The marker, positioned at Uluru
    var marker = new google.maps.Marker({position: uluru, map: map});
  }
  function myMap() {
    var mapProp= {
      center:new google.maps.LatLng(51.508742,-0.120850),
      zoom:5,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
    }