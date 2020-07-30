
var mapType = new L.StamenTileLayer("terrain");

var positions = L.layerGroup([]);

var map = L.map('map',{center: startCoordinate, zoom: startZoom, layers: [mapType, positions]});
