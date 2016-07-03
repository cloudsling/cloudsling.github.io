 var start = 9998;
 var buf = -1;
 var urlCol = new Array(
     "url('../img/moe.png') 80% 5px no-repeat",
     "url('../img/moe-change.png') 80% 5px no-repeat"
 );
 var back = new Array(
     "返",
     "滚"
 );


 var func = function() {
     if (start >= 0) {
         buf += -1;
         changeImageFunc();
         document.getElementById("remained-time").innerHTML = start;
         document.getElementById("backMsg").innerHTML = start % 2 == 0 ? back[0] : back[1];
     } else
         return;
     start += buf;
     setTimeout("func()", 1000);
 }

 var changeImageFunc = function change() {
     document.getElementById("center").style.background = start % 2 == 0 ? urlCol[0] : urlCol[1];
 }

 function changeImage() {
     document.getElementById("center").style.background = start % 2 == 0 ? urlCol[0] : urlCol[1];
 }

 function solidBackground() {
     document.getElementById("center").style.background = "#344A5F";
 }

 window.onload = function() {
     func();
 }
 window.onresize = function() {
     resize();
 }

 var oldSize = document.documentElement.clientWidth;

 function resize() {
     var wis = document.documentElement.clientWidth;
     if (wis < oldSize) {
         if (wis < 600) {
             changeImageFunc = solidBackground;
         }
     } else {
         if (wis > 600) {
             changeImageFunc = changeImage;
         }
     }
     oldSize = wis;
 }
