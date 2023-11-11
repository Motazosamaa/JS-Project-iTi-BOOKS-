var currentAudio=0;
var audioPlay=document.querySelector('#audio');
var authorName=document.querySelector('.authorName');
var seekBar=document.querySelector('.bar');
var audioName=document.querySelector('.audioName');
var disk = document.querySelector('.disk');
var currentTime = document.querySelector('.timeNow');
var audioDuration=document.querySelector('.audioDuration');
var playBtn=document.querySelector('.playBtn');
var forwardBtn=document.querySelector('.forwardBtn');
var backwardBtn=document.querySelector('.backwardBtn');

playBtn.addEventListener('click',()=>{

    if(playBtn.className.includes('pause')){
        audioPlay.play();



    }
    else{

        audioPlay.pause();

    }

    playBtn.classList.toggle('pause');
    disk.classList.toggle('play');
}
)



  var setAudio =(i)=>{
seekBar.value=0;
var audio=audios[i];
currentAudio=[i];
audioPlay.src=audio.path;
audioName.innerHTML=audio.name;
authorName.innerHTML=audio.artist;
disk.style.backgroundImage =`url('${audio.cover}')`;
currentTime.innerHTML='00:00';
seekBar.max = audioPlay.duration;

setTimeout(()=> {

seekBar.max = audioPlay.duration;
audioDuration.innerHTML= formatTime(audioPlay.duration) ;


},300)

}
var formatTime=(time)=>{

var min=Math.floor(time/60);
if(min<10)
{
min=`0${min}`;
}

var sec=Math.floor(time%60);
if(sec < 10)
{

sec =`0${sec}`;

}
return `${min} : ${sec}`;

}


setInterval(()=>{

seekBar.value=audioPlay.currentTime;
currentTime.innerHTML= formatTime(audioPlay.currentTime);

},500)



seekBar.addEventListener('change',()=>
{

audioPlay.currentTime=seekBar.value;

})



var playAudio=()=>{
audioPlay.play();
playBtn.classList.remove('pause');
disk.classList.add('play');


}

forwardBtn.addEventListener('click',()=>{

if(currentAudio>=audios.length-1){
currentAudio=0;



}
else{

    currentAudio++;
}

setAudio(currentAudio);
playAudio();

})



backwardBtn.addEventListener('click',()=>{

    if(currentAudio<=0){
    currentAudio=audios.length-1;
    
    
    
    }
    else{
    
        currentAudio--;
    }
    
    setAudio(currentAudio);
    playAudio();
    
    })

    var selectedBookId = sessionStorage.getItem('selectedBookId');
    setAudio(selectedBookId);











