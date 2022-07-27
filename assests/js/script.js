/*==================preloader================*/


window.addEventListener('load', preloader => {
       let preload = document.getElementById('preloader');
       preload.style.display = "none";
});


// ============Menu-icon Toggle=================


const navMenu = document.getElementById('nav-list'),

          navToggle = document.getElementById('nav_toggle'),
          navClose = document.getElementById('nav_close');

if(navToggle){
	navToggle.addEventListener('click', () =>{
		navMenu.classList.add('show-menu')
	})
}

if(navClose){
	navClose.addEventListener('click', () =>{
		navMenu.classList.remove('show-menu');
	})
}

// =================Navbar Animation=============


const navConatiner = document.querySelector("header");
// const navline = document.getElementById("nav_item_underline");

window.addEventListener('scroll', () =>{
	if (window.scrollY >= 50) {
       navConatiner.classList.remove('nav_container');
       // navline.classList.remove('active-link');
       navConatiner.classList.add('active');
       // navline.classList.add('active-light');
	}
	else{
	navConatiner.classList.add('nav_container');
       // navline.classList.add('active-link');
       navConatiner.classList.remove('active');
       // navline.classList.remove('active-light');
	}
});


// ==============Video play & Pause==============

const videoFile = document.getElementById('video-file');
const videoButton = document.getElementById('video-button');
const videoIcon = document.querySelector('.video-icon');
console.log(videoIcon);


function playPause() {
  if (videoFile.paused) {
    videoFile.play();
    videoIcon.classList.remove('fa-play');
    videoIcon.classList.add('fa-pause');
  }
  else{
    videoFile.pause();
    videoIcon.classList.add('fa-play');
    videoIcon.classList.remove('fa-pause');
  }
}
videoButton.addEventListener('click', playPause);

// ====================Video Ended===================

function videoEnded(){
    videoIcon.classList.add('fa-play');
    videoIcon.classList.remove('fa-pause');
}
videoFile.addEventListener('ended',videoEnded);