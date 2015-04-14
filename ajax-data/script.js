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

  /**
   * Preload function for loading data and assets before starting the sketch
   * http://p5js.org/reference/#/p5/preload
   */
  sketch.preload = function() {
    url = "http://api.openweathermap.org/data/2.5/weather?q=New York, NY"
    data = sketch.loadJSON(url);
  };

  /**
   * Same as `function setup() {}` before, but written a different way
   * using our namespace.
   */
  sketch.setup = function() {

    // set variables for the red and blue color
    red = sketch.color(255, 0, 0);
    blue = sketch.color(0, 0, 255);

    //make our full-size canvas
    sketch.createCanvas(sketch.windowWidth, sketch.windowHeight);
  }

  /**
   * Same as `function draw() {}` before, but written a different way
   * using our namespace.
   */
  sketch.draw = function() {

    // get the current timestamp using JavaScript `Date.now()`
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/now
    var now = sketch.floor(Date.now()*.001);
    // var now = 1428411600; // 8am

    // using the current time, map our progress in time from sunrise to sunset
    // to a value between 0 and 1
    // http://p5js.org/reference/#/p5/map
    var percentage = sketch.map(now, data.sys.sunrise, data.sys.sunset, 0, 1);

    // set our target width based on the window width and percentage
    var targetWidth = sketch.windowWidth*percentage;

    // clear the canvas
    sketch.clear();

    // set background color and fill
    sketch.background(blue);
    sketch.fill(red);

    // add some animation!
    // we are using the `rectWidth` variable, which starts at 0 and
    // will end up at our target width. each time the draw function
    // fires (every frame) we will update that value

    // if `rectWidth` is less than the target width, minus a certain
    // threshold (0.5)
    if(rectWidth < targetWidth-0.5) {
      // then increase the size of `rectWidth` by half of the difference
      // between the value of `rectWidth` and the target width
      rectWidth += (targetWidth-rectWidth) / 2;

    // otherwise, just set `rectWidth` to our target width
    } else {
      rectWidth = targetWidth;
    }

    // draw our rectangle based on `rectWidth`
    sketch.rect( 0, 0, rectWidth, sketch.windowHeight);
  }
});
