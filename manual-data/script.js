/**
 * Here's where our JavaScript goes
 */

// We still define our variables here
var data = {
    "coord": {
        "lon": -74.01,
        "lat": 40.71
    },
    "sys": {
        "message": 0.0172,
        "country": "United States of America",
        "sunrise": 1428402537,
        "sunset": 1428449228
    },
    "weather": [
        {
            "id": 802,
            "main": "Clouds",
            "description": "scattered clouds",
            "icon": "03d"
        }
    ],
    "base": "stations",
    "main": {
        "temp": 289.025,
        "temp_min": 289.025,
        "temp_max": 289.025,
        "pressure": 1031.62,
        "sea_level": 1035.45,
        "grnd_level": 1031.62,
        "humidity": 69
    },
    "wind": {
        "speed": 1.47,
        "deg": 95.004
    },
    "clouds": {
        "all": 44
    },
    "dt": 1428429770,
    "id": 5128581,
    "name": "New York",
    "cod": 200
}
var red;
var blue;

/**
 * We're using the p5 "instance mode" for this new structure
 * http://p5js.org/learn/examples/Instance_Mode_Instantiation.php
 * So that we can use the function attribute `sketch` to access p5 functions
 */
var mySketch = new p5(function(sketch){

  /**
   * Same as `function setup() {}` before, but written a different way
   * using our namespace.
   */
  sketch.setup = function() {
    red = sketch.color(255, 0, 0);
    blue = sketch.color(0, 0, 255);

    //make our full-size canvas
    sketch.createCanvas(sketch.windowWidth, sketch.windowHeight);
    console.log("data!", data);
  }

  /**
   * Same as `function draw() {}` before, but written a different way
   * using our namespace.
   */
  sketch.draw = function() {
    var now = sketch.floor(Date.now()*.001);
    // var now = 1428411600; // 8am
    var percentage = sketch.map(now, data.sys.sunrise, data.sys.sunset, 0, 1);
    var mix = sketch.lerpColor(red, blue, percentage);

    sketch.background(blue);
    sketch.fill(red);
    sketch.rect( 0, 0, sketch.windowWidth*percentage, sketch.windowHeight);
  }
});
