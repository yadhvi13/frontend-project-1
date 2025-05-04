//locomotive js - smooth scrolling

//(el - main parent div)

const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});


//gsap to animate
gsap.from(".nlink",{
    stagger: .2, //kitni seconds ke interval me animatied
    y: 30,
    duration: 1,
    ease: Power2,
    opacity: 0
})

Shery.textAnimate("#headings h1", /* Element to target.*/ {
    //Parameters are optional.
    style: 2,
    y:10,
    delay: 0.1,
    duration: 2,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    multiplier: 0.1,
  });

gsap.from(".anim2",{
    y:50,
    stagger: .3,
    opacity:0,
    ease: expo,
    duration: 1,

}) 

Shery.imageeffect("imageandtext img",{
    style: 4,
    debug: true,
})
//shery js to animate images accordingly



