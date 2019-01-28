var iframeEl = document.createElement("iframe");
document.body.appendChild(iframeEl);
iframeArray = window.frames[window.frames.length - 1].Array;

var array1 = new Array(1, 1, 1, 1);
var array2 = new iframeArray(1, 1, 1, 1);

console.log(array2 instanceof Array); // false
