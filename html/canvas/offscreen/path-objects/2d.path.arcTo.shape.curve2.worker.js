// DO NOT EDIT! This test has been generated by /html/canvas/tools/gentest.py.
// OffscreenCanvas test in a worker:2d.path.arcTo.shape.curve2
// Description:arcTo() curves in the right kind of shape
// Note:

importScripts("/resources/testharness.js");
importScripts("/html/canvas/resources/canvas-tests.js");

var t = async_test("arcTo() curves in the right kind of shape");
var t_pass = t.done.bind(t);
var t_fail = t.step_func(function(reason) {
    throw reason;
});
t.step(function() {

var canvas = new OffscreenCanvas(100, 50);
var ctx = canvas.getContext('2d');

var tol = 1.5; // tolerance to avoid antialiasing artifacts
ctx.fillStyle = '#0f0';
ctx.fillRect(0, 0, 100, 50);
ctx.fillStyle = '#f00';
ctx.beginPath();
ctx.rect(10, 20, 45, 10);
ctx.moveTo(80, 45);
ctx.arc(55, 45, 25-tol, 0, -Math.PI/2, true);
ctx.arc(55, 45, 15+tol, -Math.PI/2, 0, false);
ctx.fill();
ctx.strokeStyle = '#0f0';
ctx.lineWidth = 10;
ctx.beginPath();
ctx.moveTo(10, 25);
ctx.arcTo(75, 25, 75, 60, 20);
ctx.stroke();
_assertPixel(canvas, 50,25, 0,255,0,255);
_assertPixel(canvas, 55,19, 0,255,0,255);
_assertPixel(canvas, 55,20, 0,255,0,255);
_assertPixel(canvas, 55,21, 0,255,0,255);
_assertPixel(canvas, 64,22, 0,255,0,255);
_assertPixel(canvas, 65,21, 0,255,0,255);
_assertPixel(canvas, 72,28, 0,255,0,255);
_assertPixel(canvas, 73,27, 0,255,0,255);
_assertPixel(canvas, 78,36, 0,255,0,255);
_assertPixel(canvas, 79,35, 0,255,0,255);
_assertPixel(canvas, 80,44, 0,255,0,255);
_assertPixel(canvas, 80,45, 0,255,0,255);
_assertPixel(canvas, 80,46, 0,255,0,255);
t.done();

});
done();
