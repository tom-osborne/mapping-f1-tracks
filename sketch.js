let canvas;
let myMap;
const key = 'pk.eyJ1IjoidG9tLW9zYm9ybmUiLCJhIjoiY2t4dnluMm96MjFreDJ1bXZpOWRqb2FvbSJ9.sHBUciwxYXsIutZ5BxM5ZA';
const mappa = new Mappa('MapboxGL', key);

const options = {
    lat: 0,
    lng: 0,
    zoom: 1,
    style: 'mapbox://styles/mapbox/traffic-night-v2',
  };

function setup() {
    canvas = createCanvas(windowWidth, windowHeight);

    myMap = mappa.tileMap(options);        
    myMap.overlay(canvas);
  }
  
  function draw() {}