var mymap = L.map('mapid').setView([30.96, -92.42], 7)
L.tileLayer('https://{s}.tile.openstreetmap.de/tiles/osmde/{z}/{x}/{y}.png').addTo(mymap)
var SuperDome = L.marker([29.950923, -90.081621]).addTo(mymap)
var LakePont = L.polygon([
  [30.0335, -90.148],
  [30.145, -89.700],
  [30.375, -90.208],
  [30.180, -89.873]
]).addTo(mymap)
SuperDome.bindPopup('Mercedes Benz Superdome Stadium.')
LakePont.bindPopup('Lake Pontchartrain.')
var latlngs = [
  [30.0240, -90.156],
  [30.356, -90.090]
]
var LakeCwsy = L.polyline([latlngs, { color: 'red' }]).addTo(mymap)
mymap.fitBounds(polyline.getBounds())
LakeCwsy.bindPopup('lake Pontchartrain Cswy')
