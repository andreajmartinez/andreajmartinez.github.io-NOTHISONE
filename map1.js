var mymap = L.map('mapid').setView([30.96, -92.42], 7)
L.tileLayer('https://{s}.tile.openstreetmap.de/tiles/osmde/{z}/{x}/{y}.png').addTo(mymap)
var SuperDome = L.marker([29.950923, -90.081621]).addTo(mymap)
var LakePont = L.polygon([
  [30.033, -90.14],
  [30.14, -89.70],
  [30.37, -90.20],
  [30.18, -89.87]
]).addTo(mymap)
SuperDome.bindPopup('Mercedes Benz Superdome Stadium.')
LakePont.bindPopup('Lake Pontchartrain.')
var latlngs = [
  [30.024, -90.15],
  [30.35, -90.09]
]
var LakeCwsy = L.polyline([latlngs, { color: 'red' }]).addTo(mymap)
mymap.fitBounds(polyline.getBounds())
LakeCwsy.bindPopup('lake Pontchartrain Cswy')
