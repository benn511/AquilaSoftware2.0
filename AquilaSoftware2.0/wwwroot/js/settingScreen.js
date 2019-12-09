var overlay = jQuery('<div class="overlay"> </div>');


$(".settings-btn").click(function () {
    if ($(".card").is(":hidden")) {
        $(".card." + this.id).show()
        overlay.appendTo($(".list-group"))
    }
        
});

$(document).mousedown(function (e) {
    var container = $(".card");

    if (!container.is(e.target) && container.has(e.target).length === 0 && container.is(":visible")) {
        container.hide()
        overlay.remove()
        }

      
});

// var myElement = $('#myElement');
// var hammertime = new Hammer(myElement, myOptions);
// hammertime.on('pan', function(ev) {
// 	console.log(ev);
// });

