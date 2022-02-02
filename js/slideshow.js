'use strict';

let img = new Array(
  "images/keyvisual-001.jpg",
  "images/keyvisual-002.jpg",
  "images/keyvisual-003.jpg"
);
let element = document.getElementById("slideshow");
let count = -1;
imgTimer();


function imgTimer() {
  count++;
  if (count === img.length)
    count = 0;
    element.src = img[count];
    setTimeout("imgTimer()", 5000);
}