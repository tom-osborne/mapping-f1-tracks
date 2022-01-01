let canvas;
let myMap;
const key = 'pk.eyJ1IjoidG9tLW9zYm9ybmUiLCJhIjoiY2t4dnluMm96MjFreDJ1bXZpOWRqb2FvbSJ9.sHBUciwxYXsIutZ5BxM5ZA';
const mappa = new Mappa('MapboxGL', key);
let track_data;
let points = [];

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
    // track_data = loadJSON('data/f1-tracks.json', get_points);
    canvas = createCanvas(windowWidth, windowHeight);
    myMap = mappa.tileMap(options);        
    myMap.overlay(canvas);
    myMap.onChange(draw_points);
}
  
function draw() {
    noLoop();
    strokeWeight(4);
    stroke(255);
}

function draw_points() {
    points = [];
    for(let track in track_data){
        let lat = track_data[track].lat;
        let lon = track_data[track].lon;

        // Transform lat/lng to pixel position
        pos = myMap.latLngToPixel(lat, lon);
        console.log(lat, lon, pos);
        points.push(pos);
    }  

    for(let i = 0; i < points.length; i++){
        point(points[i].x, points[i].y);
    }
}
