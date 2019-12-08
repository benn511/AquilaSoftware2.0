date = new Date().toLocaleTimeString('en-US', {
    hour12: true,
    hour: "numeric",
    minute: "numeric"
});
 

$(".nav-item.time").append(date)
console.log(date)