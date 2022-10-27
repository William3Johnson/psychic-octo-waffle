// DO NOT EDIT! This test has been generated by /html/canvas/tools/gentest.py.
// OffscreenCanvas test in a worker:2d.gradient.interpolate.zerosize.stroke
// Description:
// Note:

importScripts("/resources/testharness.js");
importScripts("/html/canvas/resources/canvas-tests.js");

var t = async_test("");
var t_pass = t.done.bind(t);
var t_fail = t.step_func(function(reason) {
    throw reason;
});
t.step(function() {

var canvas = new OffscreenCanvas(100, 50);
var ctx = canvas.getContext('2d');

ctx.fillStyle = '#0f0';
ctx.fillRect(0, 0, 100, 50);
var g = ctx.createLinearGradient(50, 25, 50, 25); // zero-length line (undefined direction)
g.addColorStop(0, '#f00');
g.addColorStop(1, '#f00');
ctx.strokeStyle = g;
ctx.rect(20, 20, 60, 10);
ctx.stroke();
_assertPixel(canvas, 19,19, 0,255,0,255);
_assertPixel(canvas, 20,19, 0,255,0,255);
_assertPixel(canvas, 21,19, 0,255,0,255);
_assertPixel(canvas, 19,20, 0,255,0,255);
_assertPixel(canvas, 20,20, 0,255,0,255);
_assertPixel(canvas, 21,20, 0,255,0,255);
_assertPixel(canvas, 19,21, 0,255,0,255);
_assertPixel(canvas, 20,21, 0,255,0,255);
_assertPixel(canvas, 21,21, 0,255,0,255);
t.done();

});
done();
