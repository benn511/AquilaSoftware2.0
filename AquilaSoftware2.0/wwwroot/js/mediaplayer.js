
var songs = ["Aloe Blacc - I Need A Dollar.mp3","Bill Withers - Ain't No Sunshine.mp3","Jimi Hendrix - All Along The Watchtower.mp3","Mark Morrison- Return Of The Mack.mp3"];
var poster = ["Poster1.jpg","Poster2.jpg","Poster3.jpg","Poster4.jpg"];

var songTitle = document.getElementById("songTitle");
var fillBar = document.getElementById("fill");
var currentTime = document.getElementById("currentTime");
var duration = document.getElementById("duration");


var song = new Audio();
var currentSong = 0;    // it point to the current song

window.onload = playSong;   // it will call the function playSong when window is load

function playSong(){
    
    song.src = "~/mediaScreen/" + songs[currentSong];  //set the source of 0th song 
    
    songTitle.textContent = songs[currentSong]; // set the title of song
    
    song.play();    // play the song
}

setInterval(updateSongSlider, 1000);

function updateSongSlider () {
    var c = Math.round(song.currentTime);
    songSlider.value = c;
    currentTime.textContent = convertTime(c);
  
}

function convertTime(secs) {
    var min = Math.floor(secs/60);
    var sec = secs % 60;
    min = (min <10) ? "0" + min : min;
    sec = (sec < 10) ? "0" + sec : sec;
    return(min + ":" + sec);
}

function showDuration() {
    var d = Math.floor(song.duration);
    songSlider.setAttribute("max",d);
    duration.textContent = convertTime(d);
}

function playOrPauseSong(){
    
    if(song.paused){
        song.play();
        $("#play img").attr("src", "~/mediaScreen/Pause.png");
    }
    else{
        song.pause();
        $("#play img").attr("src", "~/mediaScreen/Play.png");
    }
}

song.addEventListener('timeupdate',function(){ 
    
    var position = song.currentTime / song.duration;
    
    fillBar.style.width = position * 100 +'%';
});


function next(){
    
    currentSong++;
    if(currentSong > 3){
        currentSong = 0;
    }
    playSong();
    $("#play img").attr("src", "~/mediaScreen/Pause.png");
    $("#image img").attr("src","~/mediaScreen/poster" + [currentSong]);
    $("#bg img").attr("src","~/mediaScreen/" + poster[currentSong]);
}

function pre(){
    
    currentSong--;
    if(currentSong < 0){
        currentSong = 2;
    }
    playSong();
    $("#play img").attr("src","Pause.png");
    $("#image img").attr("src",poster[currentSong]);
    $("#bg img").attr("src",poster[currentSong]);
}





