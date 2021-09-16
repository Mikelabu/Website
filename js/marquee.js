(function(window, document, undefined) {
    let spaceinterval = 2;
    let timeinterval = 20; // `speed`
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
       while (elem.scrollWidth < max * 50) {
       let length = elem.children.length;
        for (var i = 0; i <22; ++i) {
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