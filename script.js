let tl = gsap.timeline();


tl.from(".logo h2", {
    x: -100,
    duration: 0.9,
    // ease:1
    opacity: 0
}, 'same')
tl.from("nav i", {
    opacity: 0,
    duration: 1,
    // ease:1

}, 'same')
tl.from(".links a", {
    y: 50,
    duration: 0.7,
    // ease:1
    opacity: 0,
    stagger: 0.1
}, 'same')

tl.from("#page2 h1", {
    y: 30,
    opacity: 0,
    duration: 0.3,
    delay: 0.7,
    stagger: 0.2,
}, 'same')





let boxes = document.querySelectorAll('.box');

boxes.forEach(box => {
    const overlay = box.querySelector('.img-text');
console.log(box)
    box.addEventListener('mouseenter', () => {
        gsap.to(overlay, {
            opacity: 1,
            duration: 0.4,
            ease: 'power2.out',
            pointerEvents: 'auto',
        });
    });

    box.addEventListener('mouseleave', () => {
        gsap.to(overlay, {
            opacity: 0,
            duration: 0.4,
            ease: 'power2.out',
            pointerEvents: 'none',
        });
    });
});






let menu = document.querySelector("#menutag");
let resnav = document.querySelector(".fixed");
let flag = 0;


menu.addEventListener("click",function(){
    if(flag == 0){
        gsap.to(resnav,{
            top:"13%",
            transition:"all linear 0.3s",
            duration:"0.3"
        })
        flag = 1
    }
    else{
         gsap.to(resnav,{
            top:"-150%",
            transition:"all linear 0.3s",
            duration:"0.3"
        })
        flag = 0
    }
})