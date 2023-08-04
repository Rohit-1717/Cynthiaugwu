const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});


function firstPageAnime(){
    var tl = gsap.timeline();
    tl.from("#nav",{
        y: '-10',
        opacity: 0,
        duration:1.5,
        ease: Expo.easeInOut
    })

    .to(".boundingelem",{
        y:0,
        ease: Expo.easeInOut,
        duration:2,
        stagger:.2,
        delay:-1
    })


    .from("#footer",{
        y:-10,
        opacity:0,
        duration: 1.5,
        ease: Expo.easeInOut,
        delay:-1
    })


}

var timeout;
function mouseMoveSkew(){

    // define default scale value
    var xscale = 1;
    var yscale = 1;

    var xprev = 0;
    var yprev = 0;

    window.addEventListener("mousemove",function(dets){
        
        clearTimeout(timeout);
        xscale = gsap.utils.clamp(.8,1.2, dets.clientX - xprev);
        yscale= gsap.utils.clamp(.8,1.2,dets.clientY - yprev);
        
        xprev = dets.clientX;
        yprev = dets.clientY;

        CircleMouseFollower(xscale,yscale);

       timeout = setTimeout(function(){
            document.querySelector('#mini-circle').style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(1,1)` ;
        },100);


    });
}


mouseMoveSkew();


function CircleMouseFollower(xscale,yscale){
    window.addEventListener("mousemove",function(dets){
        document.querySelector('#mini-circle').style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(${xscale} , ${yscale})` ;
    })
}

CircleMouseFollower();
firstPageAnime();

                //code for Animating Images 
document.querySelectorAll(".elements")
.forEach(function(elements){
    elements.addEventListener("mousemove",function(details){
        gsap.to(elements.querySelector("img"),{
            opacity: 1,
            ease:Power1,
        });
    });
});