document.addEventListener('DOMContentLoaded', function(){
    var smMenuButtons = document.querySelectorAll('.sm-toggle-menu');

    for(var z =0; z < smMenuButtons.length; z++){
        var item = smMenuButtons[z];
        item.addEventListener('click', function(e) {
            document.body.classList.toggle("sm-menu-open");
        });
    }

});