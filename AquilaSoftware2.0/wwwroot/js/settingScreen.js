var overlay = jQuery('<div id="overlay"> </div>');


$(".settings-btn").mouseup(function () {
    if ($(".card").is(":hidden")) {
        $(".card." + this.id).show()
        overlay.appendTo($(".list-group"))
    }
        
});

$("body").mousedown(function () {
    if ($(".card").is(":visible")) {
        $(".card").hide()
        overlay.remove()
    }
      
});
