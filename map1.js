var mymap = L.map('mapid').setView([51.5, -0.09], 13)
L.tileLayer('https://{s}.tile.openstreetmap.de/tiles/osmde/{z}/{x}/{y}.png').addTo(mymap)
var marker = L.marker([47.380925, 8.537316]).addTo(mymap)
var polygon = L.polygon([
  [51.509, -0.08],
  [51.503, -0.06],
  [51.51, -0.047]
]).addTo(mymap)
var line = L.polygon([
  [47.377113, 8.552502],
  [47.276794, 8.544949]
]).addTo(mymap)
marker.bindPopup('Zurich Bus Station.')
polygon.bindPopup('Park Platzspitz.')
