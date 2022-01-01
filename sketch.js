let canvas;
let myMap;
const key = 'pk.eyJ1IjoidG9tLW9zYm9ybmUiLCJhIjoiY2t4dnluMm96MjFreDJ1bXZpOWRqb2FvbSJ9.sHBUciwxYXsIutZ5BxM5ZA';
const mappa = new Mappa('MapboxGL', key);
let track_data;

const options = {
    lat: 0,
    lng: 0,
    zoom: 1,
    style: 'mapbox://styles/mapbox/traffic-night-v2',
};

function preload() {
    track_data = loadJSON('data/f1-tracks.json');
}

function setup() {
    canvas = createCanvas(windowWidth, windowHeight);

    myMap = mappa.tileMap(options);        
    myMap.overlay(canvas);

    strokeWeight(8);
    stroke(255);
    for(let track in track_data){
        let lat = map(track_data[track].lat, -90, 90, 0, windowWidth);
        let lon = map(track_data[track].lon, -180, 180, 0, windowHeight);

        point(lat, lon);
    }
}
  
function draw() {}


