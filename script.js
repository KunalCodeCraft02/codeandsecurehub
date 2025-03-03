let tl1 = gsap.timeline();


tl1.from(".loader img",{
    opacity:0,
    duration:3,
    z:100
})
tl1.to(".loader",{
    duration:1,
    top:"-150%",
    transition:"all linear 0.5s"
})



let tl2 = gsap.timeline();


let resnav = document.querySelector(".res-nav");
let hamburgers =document.querySelector(".hamburgers");

let flag = 0;

hamburgers.addEventListener("click",function(){
    if(flag == 0){
        gsap.to(resnav,{
            left:"0%",
            duration:0.3
        })
        flag = 1;
    }
    else{
        gsap.to(resnav,{
            left:"-100%",
            duration:0.3
        })
        flag = 0;
    }
})
