const scroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
});

function circlemousefolo(xscale, yscale) {
    window.addEventListener("mousemove", function (dets) {
        document.querySelector("#minicircale").style.transform =
            `translate(${dets.clientX}px, ${dets.clientY}px) scale(${xscale}, ${yscale})`;
    });
}

function minicircalskew() {

    var xscale = 1;
    var yscale = 1;

    var xprev = 0;
    var yprev = 0;

    window.addEventListener("mousemove", function (dets) {

        var xdiff = dets.clientX - xprev;
        var ydiff = dets.clientY - yprev;

        xprev = dets.clientX;
        yprev = dets.clientY;

        xscale = gsap.utils.clamp(0.8, 1.2, xdiff);
        yscale = gsap.utils.clamp(0.8, 1.2, ydiff);

        document.querySelector("#minicircale").style.transform =
            `translate(${dets.clientX}px, ${dets.clientY}px) scale(${xscale}, ${yscale})`;
    });
}

minicircalskew();

function heroanim() {

    var t1 = gsap.timeline();

    t1.from("#nav", {
        y: -10,
        opacity: 0,
        duration: 1.2,
        ease: "expo.inOut"
    })

    .to(".boundingelam", {
        y: 0,
        duration: 1,
        stagger: 0.2,
        ease: "expo.out"
    });
}

heroanim(); 

document.querySelectorAll(".elem")
.forEach(function (elem) {
    elem.addEventListener("mousemove", function(details){
        gsap.to(elem.querySelector("img"),{
            opacity: 1,
            ease: "power1.out"
        })
    });
});