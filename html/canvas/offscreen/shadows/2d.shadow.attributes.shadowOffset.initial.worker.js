// DO NOT EDIT! This test has been generated by /html/canvas/tools/gentest.py.
// OffscreenCanvas test in a worker:2d.shadow.attributes.shadowOffset.initial
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

_assertSame(ctx.shadowOffsetX, 0, "ctx.shadowOffsetX", "0");
_assertSame(ctx.shadowOffsetY, 0, "ctx.shadowOffsetY", "0");
t.done();

});
done();
