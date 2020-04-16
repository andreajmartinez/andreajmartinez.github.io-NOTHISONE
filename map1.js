var mymap = L.map('mapid').setView([47.37, 8.33], 13)
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}'{
attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'your.mapbox.access.token'
    }).addTo(mymap);
var marker = L.marker([47.380925, 8.537316]).addTo(mymap)
var polygon = L.polygon([
  [47.382086, 8.544165],
  [47.379333, 8.538436],
  [47.37873, 8.541666]
]).addTo(mymap)
var line = L.polygon([
  [47.377113, 8.552502],
  [47.276794, 8.544949]
]).addTo(mymap)
polygon.bindPopup('Park Platzspitz.')
marker.bindPopup('Zurich Bus Station.')
line.blindPopup('Road to University Hospital of Zurich.')
