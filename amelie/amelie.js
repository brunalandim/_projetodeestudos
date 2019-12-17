// para repetir esse projeto através desse link aqui: https://www.youtube.com/watch?v=wLUJ9VNzZXo
// ainda não consegui colocar a posição do mouse para controlar o vídeo

const intro = document.querySelector('.intro'); 
const video = intro.querySelector('video');
const text = intro.querySelector('h1'); 
//end section 

const section = document.querySelector('section'); 
const end = section.querySelector('h1');

//scrollmagic

const controller = new ScrollMagic.Controller(); 

//scenes
let scene = new ScrollMagic.Scene({
    duration: 9000, 
    triggerElment: intro, 
    triggerHook: 0

})
.addIndicators()
.setPin(intro)
.addTo(controller);

const textAnim = TweenMax.fromTo(text, 3, {opacity:1}, {opacity:0});

let scene2 = new ScrollMagic.Scene({
    duration:3000,
    triggerElment: intro, 
    triggerHook: 0
})
.setTween(textAnim)
.addTo(controller);

//animations
let accelamount = 0.1; 
let scollpos = 0; 
let delay = 0; 

scene.on('update', e=>{
    scrollpos = e.scollpos / 1000; 
});

setInterval(() =>{
    delay += (scrollpos - delay) * accelamount; 
    console.log(scrollpos,delay); 
    video.currenTime = delay; 
}, 41.6);
