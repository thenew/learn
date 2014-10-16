document.addEventListener('DOMContentLoaded', function(){

    // document.addEventListener('mouseclick', function(e) {
    //     console.log(e);
    // });


    document.addEventListener('MouseEvent.which', function(e) {
        // e.preventDefault();
        // console.log(e.keyCode);
        // if(e.keyIdentifier == 'Down' || e.keyIdentifier == 'Right') {
        //     learnNext();
        // }
// console.log('pressed');
//         var buttonPressed = instanceOfMouseEvent.which;
//         console.log(buttonPressed);
    });




});



/*
function convertToSlug(Text) {
    return Text
        .toLowerCase()
        .replace(/[^\w ]+/g,'')
        .replace(/ +/g,'-')
        ;
}

function clrzRandom(min, max) {
  return Math.random() * (max - min) + min;
}

document.addEventListener('DOMContentLoaded', function(){

    // Table of contents

    var lastAnchorName = '';

    $('#toc').toc({
        'selectors': '.method-title, .call-title', //elements to use as headings
        'container': 'body', //element to find all selectors in
        'prefix': 'doc', //prefix for anchor tags and class names
        'onHighlight': function(el) {}, //called when a new section is highlighted
        'highlightOnScroll': true, //add class to heading that is currently in focus
        'highlightOffset': 100, //offset to trigger the next headline
        'anchorName': function(i, heading, prefix) { //custom function for anchor name
            if(heading.id.length) {
              return heading.id;
            }

            var candidateId = $(heading).text().replace(/[^a-z0-9]/ig, ' ').replace(/\s+/g, '-').toLowerCase();

            var label = convertToSlug($(heading).html());

            if($(heading).hasClass('method-title')) {
                lastAnchorName = label;
                return lastAnchorName;
            } else {
                if(lastAnchorName) {
                    return lastAnchorName + '-' + label;
                } else {
                    return prefix + '-' + candidateId;
                }
            }

        },
        'headerText': function(i, heading, $heading) { //custom function building the header-item text
            return $heading.text();
        },
        'itemClass': function(i, heading, $heading, prefix) { // custom function for item class
          return $heading[0].tagName.toLowerCase();
        }
    });

    // Header bg

    (function() {

        var PI, can, cell, ctx, dim, rad, x, y, _i, _j, _ref, _ref1;

        PI = Math.PI;

        can = document.getElementById('canvas');

        ctx = can.getContext('2d');

        dim = clrzRandom(4,12);

        rad = dim / clrzRandom(1.2, 2.8);

        can.width = can.parentNode.offsetWidth;

        can.height = can.parentNode.offsetHeight;

        cell = function(x, y) {
          ctx.save();
          ctx.translate(x + rad, y + rad);
          ctx.rotate(PI * 0.25 + PI * 0.5 * Math.floor(Math.random() * 2));
          ctx.moveTo(-rad, 0);
          ctx.lineTo(rad, 0);
          return ctx.restore();
        };

        for (y = _i = 0, _ref = canvas.height; dim > 0 ? _i <= _ref : _i >= _ref; y = _i += dim) {
          for (x = _j = 0, _ref1 = canvas.width; dim > 0 ? _j <= _ref1 : _j >= _ref1; x = _j += dim) {
            cell(x, y);
          }
        }

        ctx.strokeStyle = 'rgba(255,255,255,.4)';

        ctx.lineWidth = 1.5;

        ctx.lineCap = 'round';

        ctx.stroke();

    })();


    // menuFlottant
    var tocElement = document.querySelector('#toc');
    if(tocElement){
        window.addEventListener('scroll',function(e){
            var currentScroll = jQuery(window).scrollTop();
            if(currentScroll < 1) {
                // top
                tocElement.style.top = 'auto';
            } else if(currentScroll < 110) {
                // transition
                var gap = 110 - currentScroll;
                tocElement.style.top = gap + 'px';
            } else {
                // on ne voit plus le header
                tocElement.style.top = '10px';
            }
        });
    }


});
*/