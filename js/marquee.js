"use strict";

(function(window, document, undefined) {
    let spaceinterval = 1;
    let timeinterval = 10; // `speed`
   let max;
  let firstrun = true;
    // Interval function:
   let gallery = function() {
     let elem = document.getElementById("marquee-container");
     if (elem) {
      if (firstrun) {
       max = elem.scrollWidth;
       // Clone the children of the container until the
       // scrollWidth is at least twice as large as max.
       while (elem.scrollWidth < max * 2) {
       let length = elem.children.length;
        for (var i = 0; i < length; ++i) {
         elem.appendChild(elem.children[i].cloneNode(true));
        }
        break;
       }
       firstrun = false;
      }
      if (elem.scrollLeft >= max) {
       elem.scrollLeft -= max;
      } else {
       elem.scrollLeft += spaceinterval;
      }
     }
    };
    window.setInterval(gallery, timeinterval);
   })(window, document);

