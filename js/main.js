const music = document.getElementById("lofi-music");
const btn = document.getElementById("music-btn");


music.volume = 0.25;


let isPlaying = localStorage.getItem("musicPlaying") === "true";
let savedTime = localStorage.getItem("musicTime");


if(savedTime){
    music.currentTime = savedTime;
}


if(isPlaying){
    music.play().catch(()=>{});
}


updateButton();


btn.onclick = () => {

    if(music.paused){

        music.play();
        isPlaying = true;

    }else{

        music.pause();
        isPlaying = false;

    }

    localStorage.setItem("musicPlaying", isPlaying);

    updateButton();
};



setInterval(()=>{

    localStorage.setItem("musicTime", music.currentTime);

},1000);


function updateButton(){

    if(isPlaying){

        btn.innerText = "🔊 musique";

    }else{

        btn.innerText = "🔇 musique";

    }

}