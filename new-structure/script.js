/**
 * Here's where our JavaScript goes
 */

// We still define our variables here
// var varName = "";

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
    // get things started
  }

  /**
   * Same as `function draw() {}` before, but written a different way
   * using our namespace.
   */
  sketch.draw = function() {
    // go!
  }
});
