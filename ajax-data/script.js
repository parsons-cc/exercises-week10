/**
 * Here's where our JavaScript goes
 */

// We still define our variables here
var data;
var red;
var blue;
var rectWidth = 0;

/**
 * We're using the p5 "instance mode" for this new structure
 * http://p5js.org/learn/examples/Instance_Mode_Instantiation.php
 * So that we can use the function attribute `sketch` to access p5 functions
 */
var mySketch = new p5(function(sketch){

  sketch.preload = function() {
    url = "http://api.openweathermap.org/data/2.5/weather?q=New%20York,NY"
    data = sketch.loadJSON(url);
  };

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
    var targetWidth = sketch.windowWidth*percentage;

    sketch.clear();

    sketch.background(blue);
    sketch.fill(red);

    // add some animation!
    if(rectWidth < targetWidth-0.5) {
      rectWidth += (targetWidth-rectWidth) / 2;
    } else {
      rectWidth = targetWidth;
    }

    sketch.rect( 0, 0, rectWidth, sketch.windowHeight);
  }
});
