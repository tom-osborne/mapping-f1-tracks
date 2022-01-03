let canvas;
let myMap;
const key = '';
const mappa = new Mappa('MapboxGL', key);
let track_data;
let points = [];
let names = [];

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
        let name = track_data[track].location;

        pos = createVector(lat, lon);
        points.push(pos);
        names.push(name);
    }
}
  
function draw() {
    clear();

    //Points
    strokeWeight(6);
    stroke(255, 0, 0);
    for(let i = 0; i < points.length; i++){
        let pix = myMap.latLngToPixel(points[i].x, points[i].y);
        point(pix.x, pix.y);
    }

    let zoom = myMap.zoom();

    if(zoom > 2.5){
        // Labels
        fill(255);
        noStroke();
        for(let i = 0; i < names.length; i++){
            let pix = myMap.latLngToPixel(points[i].x, points[i].y);
            text(names[i], pix.x + 5, pix.y);
        }
    }
}
