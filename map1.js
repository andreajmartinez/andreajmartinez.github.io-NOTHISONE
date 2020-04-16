var mymap = L.map('mapid').setView([47.37, 8.33], 4)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(mymap)
var marker = L.marker([47.380925, 8.537316]).addTo(mymap)
var polygon = L.polygon([
  [47.382086, 8.544165],
  [47.379333, 8.538436],
  [47.37873, 8.541666]
]).addTo(mymap)
var line = L.line([
  [47.377113, 8.552502],
  [47.276794, 8.544949]
]).addTo(mymap)
polygon.bindPopup('Park Platzspitz.')
marker.bindPopup('Zurich Bus Station.')
line.blindPopup('Road to University Hospital of Zurich.')
