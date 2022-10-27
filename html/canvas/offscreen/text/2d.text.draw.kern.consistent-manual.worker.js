// DO NOT EDIT! This test has been generated by /html/canvas/tools/gentest.py.
// OffscreenCanvas test in a worker:2d.text.draw.kern.consistent
// Description:Stroked and filled text should have exactly the same kerning so it overlaps
// Note:

importScripts("/resources/testharness.js");
importScripts("/html/canvas/resources/canvas-tests.js");

var t = async_test("Stroked and filled text should have exactly the same kerning so it overlaps");
var t_pass = t.done.bind(t);
var t_fail = t.step_func(function(reason) {
    throw reason;
});
t.step(function() {

var canvas = new OffscreenCanvas(100, 50);
var ctx = canvas.getContext('2d');

ctx.fillStyle = '#0f0';
ctx.fillRect(0, 0, 100, 50);
ctx.fillStyle = '#f00';
ctx.strokeStyle = '#0f0';
ctx.lineWidth = 3;
ctx.font = '20px Arial, sans-serif';
ctx.fillText('VAVAVAVAVAVAVA', -50, 25);
ctx.fillText('ToToToToToToTo', -50, 45);
ctx.strokeText('VAVAVAVAVAVAVA', -50, 25);
ctx.strokeText('ToToToToToToTo', -50, 45);
t.done();

});
done();
