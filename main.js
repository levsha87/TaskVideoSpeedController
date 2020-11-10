const speed = document.querySelector('.speed');
const bar = document.querySelector('.speed-bar');
const video = document.querySelector('.flex');

function handleMove(e) {
const y = e.pageY - Math.round(this.getBoundingClientRect().top);
const percent = y/Math.round(this.getBoundingClientRect().height);
const min = 0.4;
const max = 6;
const height = Math.round(percent*100)+'%';
const playbackRate = percent*(max-min) + min;
bar.style.height = height;
bar.textContent = playbackRate.toFixed(2) +'x';
video.playbackRate = playbackRate;
}

function removeHandleMove (){
    if(this.classList.contains('active')){
        speed.addEventListener('mousemove', handleMove);
    } else {
        speed.removeEventListener('mousemove', handleMove);
    }
}

speed.addEventListener('click', function(){
    this.classList.toggle('active');
});
speed.addEventListener('click', removeHandleMove);


