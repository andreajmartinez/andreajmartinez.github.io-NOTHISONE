var mymap = L.map('mapid').setView([30.96, -90.42], 5)
L.tileLayer('https://{s}.tile.openstreetmap.de/tiles/osmde/{z}/{x}/{y}.png').addTo(mymap)
var marker = L.marker([29.950923, -90.081621]).addTo(mymap)
var polygon = L.polygon([
  [30.033586, -90.148483],
  [30.14528, -89.70079],
  [30.375397, -90.208908],
  [30.1809, -89.873825]
]).addTo(mymap)
var line = L.polygon([
  [30.024074, -90.156723],
  [30.356539, -90.090805]
]).addTo(mymap)
marker.bindPopup('Mercedes Benz Superdome Stadium.')
polygon.bindPopup('Lake Pontchartrain.')
line.bindPopup('lake Pontchartrain Cswy')
