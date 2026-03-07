gsap.registerPlugin(ScrollTrigger);

/* ---------- SECTION ANIMATION ---------- */

const sections = document.querySelectorAll(".section1, .section2, .section3");

sections.forEach((section)=>{

const image = section.querySelector(".car-image");
const text = section.querySelector(".car-text");

gsap.from(image,{
scrollTrigger:{
trigger:section,
start:"top 80%"
},
x:-80,
opacity:0,
duration:1.2,
ease:"power3.out"
});

gsap.from(text,{
scrollTrigger:{
trigger:section,
start:"top 80%"
},
x:80,
opacity:0,
duration:1.2,
ease:"power3.out"
});

});


/* ---------- VIDEO FADE EFFECT ---------- */

gsap.to(".bmwm2video",{
scrollTrigger:{
trigger:".bmwm2video",
start:"top top",
end:"bottom top",
scrub:true
},
opacity:0.6
});