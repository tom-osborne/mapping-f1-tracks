let canvas;
let myMap;
const key = 'pk.eyJ1IjoidG9tLW9zYm9ybmUiLCJhIjoiY2t4dnluMm96MjFreDJ1bXZpOWRqb2FvbSJ9.sHBUciwxYXsIutZ5BxM5ZA';
const mappa = new Mappa('MapboxGL', key);
let track_data;
let points = [];

const options = {
    lat: 20,
    lng: 10,
    zoom: 1.6,
    style: 'mapbox://styles/mapbox/traffic-night-v2',
};

function preload() {
    track_data = loadJSON('data/f1-tracks.json');
}

function setup() {
    canvas = createCanvas(windowWidth, windowHeight);
    myMap = mappa.tileMap(options);
    myMap.overlay(canvas);  

    for(let track in track_data){
        let lat = track_data[track].lat;
        let lon = track_data[track].lon;

        // Transform lat/lng to pixel position
        pos = createVector(lat, lon);
        points.push(pos);
    }
}
  
function draw() {
    clear();
    strokeWeight(6);
    stroke(255, 0, 0);
    for(let i = 0; i < points.length; i++){
        let pix = myMap.latLngToPixel(points[i].x, points[i].y);
        point(pix.x, pix.y);
    }
}