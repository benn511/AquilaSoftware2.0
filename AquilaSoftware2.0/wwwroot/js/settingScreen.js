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

//TIME SETTINGS
var currentHour = 0
var currentMinutes = 0
window.addEventListener('load', function () {
    currentHour = parseInt($(".hour").text())
    currentMinutes = parseInt($(".minutes").text())
})
$(".time-hour.up").click(function () {
    
}
);


// var myElement = $('#myElement');
// var hammertime = new Hammer(myElement, myOptions);
// hammertime.on('pan', function(ev) {
// 	console.log(ev);
// });

