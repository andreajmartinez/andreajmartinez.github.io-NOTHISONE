var mymap = L.map('mapid').setView([30.96, -90.42], 7)
L.tileLayer('https://{s}.tile.openstreetmap.de/tiles/osmde/{z}/{x}/{y}.png').addTo(mymap)
var marker = L.marker([29.950923, -90.081621]).addTo(mymap)
var polygon = L.polygon([
  [30.0335, -90.148],
  [30.145, -89.700],
  [30.375, -90.208],
  [30.180, -89.873]
]).addTo(mymap)
var line = L.polygon([
  [30.0240, -90.156],
  [30.356, -90.090]
]).addTo(mymap)
marker.bindPopup('Mercedes Benz Superdome Stadium.')
polygon.bindPopup('Lake Pontchartrain.')
line.bindPopup('lake Pontchartrain Cswy')
