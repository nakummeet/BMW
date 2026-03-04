// Locomotive Scroll
const scroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true
});


function minicircalskew() {

    let xscale = 1;
    let yscale = 1;

    let xprev = 0;
    let yprev = 0;

    window.addEventListener("mousemove", function (dets) {

        let xdiff = dets.clientX - xprev;
        let ydiff = dets.clientY - yprev;

        xprev = dets.clientX;
        yprev = dets.clientY;

        xscale = gsap.utils.clamp(0.8, 1.2, xdiff * 0.01);
        yscale = gsap.utils.clamp(0.8, 1.2, ydiff * 0.01);

        gsap.to("#minicircale", {
            x: dets.clientX,
            y: dets.clientY,
            scaleX: xscale,
            scaleY: yscale,
            duration: 0.2,
            ease: "power2.out"
        });
    });
}

minicircalskew();



function heroanim() {

    let tl = gsap.timeline();

    tl.from("#nav", {
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

    elem.addEventListener("mouseenter", function () {

        gsap.to(elem.querySelector("img"), {
            opacity: 1,
            duration: 0.3
        });

    });

    elem.addEventListener("mouseleave", function () {

        gsap.to(elem.querySelector("img"), {
            opacity: 0,
            duration: 0.3
        });

    });

});