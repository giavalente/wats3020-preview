/* ==========================================================================
   Author's JS :) 
   ========================================================================== */

//When DOM is ready, run javascript
 $(document).ready(function() {  
    console.log('ready');
//Define map
var map = L.map('map-container').setView([47.6163942, -122.321004], 11);
//Add Tile Layers for Open Streets, Satellite, and Map View
var osmUrl='http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
var osmAttrib='Map data © <a href="http://openstreetmap.org">OpenStreetMap</a> contributors';
var osm = new L.tileLayer(osmUrl, {minZoom: 8, maxZoom: 18, attribution: osmAttrib});

var satLayer = L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.satellite',
    accessToken: 'pk.eyJ1IjoiZ2lhdmFsZW50ZSIsImEiOiJjajAxdXU2Z3EwNnhnMnZxcWR4aHh4bGpmIn0.zAxuXBq_3fakW6U-wx_9uw'
});
    
var drawLayer = L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.mapbox-terrain-v1',
    accessToken: 'pk.eyJ1IjoiZ2lhdmFsZW50ZSIsImEiOiJjajAxdXU2Z3EwNnhnMnZxcWR4aHh4bGpmIn0.zAxuXBq_3fakW6U-wx_9uw'
});

var mapLayers = {
    "Open Street Maps": osm,
    "Satellite": satLayer,
    "Map View": drawLayer,
}

//Add layer controls to map
L.control.layers(mapLayers).addTo(map);
osm.addTo(map);
      
// Customize Map to show markers with popups.
var ballard = new L.marker([47.6666, -122.3831]);
   ballard.addTo(map);
   ballard.bindPopup(
     'Ballard Farmers Market'
   );   
   
 var udist = L.marker([47.6656, -122.3131]);
   udist.addTo(map);
   udist.bindPopup(
     'University District Farmers Market.'
   );  
   
 var caphill = L.marker([47.6163942, -122.321004]);
   caphill.addTo(map);
   caphill.bindPopup(
     'Capitol Hill Farmers Market'
   );   
   
 var west = L.marker([47.5614, -122.3880]);
   west.addTo(map);
   west.bindPopup(
     'West Seattle Farmers Market'
   );   
   
  $('#order-form').validate({
    submitHandler: function(form) {
      alert("Order Successfully placed!");
      form.submit();
    },
    rules: {
      "your-name": {
        required: true,
        maxlength: 128, 
        digits: false
      },
      "email": {
        required: true,
        email: true
      }, 
      "phone": {
        required: true, 
        minlength: 10, 
        digits: true
      }, 
       "your-zip": {
        required: true, 
        minlength: 5, 
        digits: true
      }, 
       "soup-choice": {
         maxlength: 500, 
       },
       "comments": {
         maxlength: 500, 
       },
     },
 });   
 });
   

   