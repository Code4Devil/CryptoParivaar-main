function loco(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});



// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}
loco();

var tl = gsap.timeline();

tl

// .from("#loader h1", {
//   x:850,
//   duration:4,
//   // delay:1,
//   stagger:.2,
//   ease: Power3.easeInOut 
// })


.to("#loader",{
  height:0,
  delay:6,
  duration:2,
  ease: Expo.easeInOut 
})

.to("#loader h1",{
  opacity:0,
  delay:-1
})

var crsr = document.querySelector("#cursor");


window.addEventListener("mousemove", function(dets){
  gsap.to(cursor,{
    x:dets.clientX-30,
    y:dets.clientY-30
  })
})









// var big1 = document.querySelector(".big");


// big1.addEventListener("mousemove", function(dets){
//   // gsap.to(cursor,{
//   //   scale:4,
//   //   opacity:0.4
//   // })

//   // gsap.to(".big h1",{
//   //   color:"#fff"
//   // })
// })

// big1.addEventListener("mouseleave", function(dets){
//   // gsap.to(cursor,{
//   //   scale:1,
//   //   opacity:1
    
//   // })

//   // gsap.to(".big h1",{
//   //   color:"#000"
//   // })
// })










var big2 = document.querySelector(".big2");

big2.addEventListener("mousemove", function(dets){
  gsap.to(cursor,{
    scale:4,
    
  })


})

big2.addEventListener("mouseleave", function(dets){
  gsap.to(cursor,{
    scale:1,
    opacity:1,
    // bgcolor:'#fff'
    
  })
  
})












const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


window.addEventListener("resize", function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  render();
});

function files(index) {
  var data = `
./Frame/Frame/frame00001.png
./Frame/Frame/frame00002.png
./Frame/Frame/frame00003.png
./Frame/Frame/frame00004.png
./Frame/Frame/frame00005.png
./Frame/Frame/frame00006.png
./Frame/Frame/frame00007.png
./Frame/Frame/frame00008.png
./Frame/Frame/frame00009.png
./Frame/Frame/frame00010.png
./Frame/Frame/frame00011.png
./Frame/Frame/frame00012.png
./Frame/Frame/frame00013.png
./Frame/Frame/frame00014.png
./Frame/Frame/frame00015.png
./Frame/Frame/frame00016.png
./Frame/Frame/frame00017.png
./Frame/Frame/frame00018.png
./Frame/Frame/frame00019.png
./Frame/Frame/frame00020.png
./Frame/Frame/frame00021.png
./Frame/Frame/frame00022.png
./Frame/Frame/frame00023.png
./Frame/Frame/frame00024.png
./Frame/Frame/frame00025.png
./Frame/Frame/frame00026.png
./Frame/Frame/frame00027.png
./Frame/Frame/frame00028.png
./Frame/Frame/frame00029.png
./Frame/Frame/frame00030.png
./Frame/Frame/frame00031.png
./Frame/Frame/frame00032.png
./Frame/Frame/frame00033.png
./Frame/Frame/frame00034.png
./Frame/Frame/frame00035.png
./Frame/Frame/frame00036.png
./Frame/Frame/frame00037.png
./Frame/Frame/frame00038.png
./Frame/Frame/frame00039.png
./Frame/Frame/frame00040.png
./Frame/Frame/frame00041.png
./Frame/Frame/frame00042.png
./Frame/Frame/frame00043.png
./Frame/Frame/frame00044.png
./Frame/Frame/frame00045.png
./Frame/Frame/frame00046.png
./Frame/Frame/frame00047.png
./Frame/Frame/frame00048.png
./Frame/Frame/frame00049.png
./Frame/Frame/frame00050.png
./Frame/Frame/frame00051.png
./Frame/Frame/frame00052.png
./Frame/Frame/frame00053.png
./Frame/Frame/frame00054.png
./Frame/Frame/frame00055.png
./Frame/Frame/frame00056.png
./Frame/Frame/frame00057.png
./Frame/Frame/frame00058.png
./Frame/Frame/frame00059.png
./Frame/Frame/frame00060.png
./Frame/Frame/frame00061.png
./Frame/Frame/frame00062.png
./Frame/Frame/frame00063.png
./Frame/Frame/frame00064.png
./Frame/Frame/frame00065.png
./Frame/Frame/frame00066.png
./Frame/Frame/frame00067.png
./Frame/Frame/frame00068.png
./Frame/Frame/frame00069.png
./Frame/Frame/frame00070.png
./Frame/Frame/frame00071.png
./Frame/Frame/frame00072.png
./Frame/Frame/frame00073.png
./Frame/Frame/frame00074.png
./Frame/Frame/frame00075.png
./Frame/Frame/frame00076.png
./Frame/Frame/frame00077.png
./Frame/Frame/frame00078.png
./Frame/Frame/frame00079.png
./Frame/Frame/frame00080.png
./Frame/Frame/frame00081.png
./Frame/Frame/frame00082.png
./Frame/Frame/frame00083.png
./Frame/Frame/frame00084.png
./Frame/Frame/frame00085.png
./Frame/Frame/frame00086.png
./Frame/Frame/frame00087.png
./Frame/Frame/frame00088.png
./Frame/Frame/frame00089.png
./Frame/Frame/frame00090.png
./Frame/Frame/frame00091.png
./Frame/Frame/frame00092.png
./Frame/Frame/frame00093.png
./Frame/Frame/frame00094.png
./Frame/Frame/frame00095.png
./Frame/Frame/frame00096.png
./Frame/Frame/frame00097.png
./Frame/Frame/frame00098.png
./Frame/Frame/frame00099.png
./Frame/Frame/frame00100.png
./Frame/Frame/frame00101.png
./Frame/Frame/frame00102.png
./Frame/Frame/frame00103.png
./Frame/Frame/frame00104.png
./Frame/Frame/frame00105.png
./Frame/Frame/frame00106.png
./Frame/Frame/frame00107.png
./Frame/Frame/frame00108.png
./Frame/Frame/frame00109.png
./Frame/Frame/frame00110.png
./Frame/Frame/frame00111.png
./Frame/Frame/frame00112.png
./Frame/Frame/frame00113.png
./Frame/Frame/frame00114.png
./Frame/Frame/frame00115.png
./Frame/Frame/frame00116.png
./Frame/Frame/frame00117.png
./Frame/Frame/frame00118.png
./Frame/Frame/frame00119.png
./Frame/Frame/frame00120.png
./Frame/Frame/frame00121.png
./Frame/Frame/frame00122.png
./Frame/Frame/frame00123.png
./Frame/Frame/frame00124.png
./Frame/Frame/frame00125.png
./Frame/Frame/frame00126.png
./Frame/Frame/frame00127.png
./Frame/Frame/frame00128.png
./Frame/Frame/frame00129.png
./Frame/Frame/frame00130.png
./Frame/Frame/frame00131.png
./Frame/Frame/frame00132.png
./Frame/Frame/frame00133.png
./Frame/Frame/frame00134.png
./Frame/Frame/frame00135.png
./Frame/Frame/frame00136.png
./Frame/Frame/frame00137.png
./Frame/Frame/frame00138.png
./Frame/Frame/frame00139.png
./Frame/Frame/frame00140.png
./Frame/Frame/frame00141.png
./Frame/Frame/frame00142.png
./Frame/Frame/frame00143.png
./Frame/Frame/frame00144.png
./Frame/Frame/frame00145.png
./Frame/Frame/frame00146.png
./Frame/Frame/frame00147.png
./Frame/Frame/frame00148.png
./Frame/Frame/frame00149.png
./Frame/Frame/frame00150.png
./Frame/Frame/frame00150.png
./Frame/Frame/frame00151.png
./Frame/Frame/frame00152.png
./Frame/Frame/frame00153.png
./Frame/Frame/frame00154.png
./Frame/Frame/frame00155.png
./Frame/Frame/frame00156.png
./Frame/Frame/frame00157.png
./Frame/Frame/frame00158.png
./Frame/Frame/frame00159.png
./Frame/Frame/frame00160.png
./Frame/Frame/frame00161.png
./Frame/Frame/frame00162.png
./Frame/Frame/frame00163.png
./Frame/Frame/frame00164.png
./Frame/Frame/frame00165.png
./Frame/Frame/frame00166.png
./Frame/Frame/frame00167.png
./Frame/Frame/frame00168.png
./Frame/Frame/frame00169.png
./Frame/Frame/frame00170.png
./Frame/Frame/frame00171.png
./Frame/Frame/frame00172.png
./Frame/Frame/frame00173.png
./Frame/Frame/frame00174.png
./Frame/Frame/frame00175.png
./Frame/Frame/frame00176.png
./Frame/Frame/frame00177.png
./Frame/Frame/frame00178.png
./Frame/Frame/frame00179.png
./Frame/Frame/frame00180.png
./Frame/Frame/frame00181.png
./Frame/Frame/frame00182.png
./Frame/Frame/frame00183.png
./Frame/Frame/frame00184.png
./Frame/Frame/frame00185.png
./Frame/Frame/frame00186.png
./Frame/Frame/frame00187.png
./Frame/Frame/frame00188.png
./Frame/Frame/frame00189.png
./Frame/Frame/frame00190.png
./Frame/Frame/frame00191.png
./Frame/Frame/frame00192.png
./Frame/Frame/frame00193.png
./Frame/Frame/frame00194.png
./Frame/Frame/frame00195.png
./Frame/Frame/frame00196.png
./Frame/Frame/frame00197.png
./Frame/Frame/frame00198.png
./Frame/Frame/frame00199.png
./Frame/Frame/frame00200.png
./Frame/Frame/frame00201.png
./Frame/Frame/frame00202.png
./Frame/Frame/frame00203.png
./Frame/Frame/frame00204.png
./Frame/Frame/frame00205.png
./Frame/Frame/frame00206.png
./Frame/Frame/frame00207.png
./Frame/Frame/frame00208.png
./Frame/Frame/frame00209.png
./Frame/Frame/frame00210.png
./Frame/Frame/frame00211.png
./Frame/Frame/frame00212.png
./Frame/Frame/frame00213.png
./Frame/Frame/frame00214.png
./Frame/Frame/frame00215.png
./Frame/Frame/frame00216.png
./Frame/Frame/frame00217.png
./Frame/Frame/frame00218.png
./Frame/Frame/frame00219.png
./Frame/Frame/frame00220.png
./Frame/Frame/frame00221.png
./Frame/Frame/frame00222.png
./Frame/Frame/frame00223.png
./Frame/Frame/frame00224.png
./Frame/Frame/frame00225.png
./Frame/Frame/frame00226.png
./Frame/Frame/frame00227.png
./Frame/Frame/frame00228.png
./Frame/Frame/frame00229.png
./Frame/Frame/frame00230.png
./Frame/Frame/frame00231.png
./Frame/Frame/frame00232.png
./Frame/Frame/frame00233.png
./Frame/Frame/frame00234.png
./Frame/Frame/frame00235.png
./Frame/Frame/frame00236.png
./Frame/Frame/frame00237.png
./Frame/Frame/frame00238.png
./Frame/Frame/frame00239.png
./Frame/Frame/frame00240.png
./Frame/Frame/frame00241.png
./Frame/Frame/frame00242.png
./Frame/Frame/frame00243.png
./Frame/Frame/frame00244.png
./Frame/Frame/frame00245.png
./Frame/Frame/frame00246.png
./Frame/Frame/frame00247.png
./Frame/Frame/frame00248.png
./Frame/Frame/frame00249.png
./Frame/Frame/frame00250.png
./Frame/Frame/frame00251.png
./Frame/Frame/frame00252.png
./Frame/Frame/frame00253.png
./Frame/Frame/frame00254.png
./Frame/Frame/frame00255.png
`;
  return data.split("\n")[index];
}

const frameCount = 300;

const images = [];
const imageSeq = {
  frame: 1,
};

for (let i = 0; i < frameCount; i++) {
  const img = new Image();
  img.src = files(i);
  images.push(img);
}

gsap.to(imageSeq, {
  frame: frameCount - 1,
  snap: "frame",
  ease: `none`,
  scrollTrigger: {
    scrub: 0.15,
    trigger: `#canvaspage>canvas`,
    start: `top bottom`,
    end: `400% top`,
    scroller: `#main`,
  },
  onUpdate: render,
});

images[1].onload = render;

function render() {
  scaleImage(images[imageSeq.frame], context);
}

function scaleImage(img, ctx) {
  var canvas = ctx.canvas;
  var hRatio = canvas.width / img.width;
  var vRatio = canvas.height / img.height;
  var ratio = Math.max(hRatio, vRatio);
  var centerShift_x = (canvas.width - img.width * ratio) / 2;
  var centerShift_y = (canvas.height - img.height * ratio) / 2;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(
    img,
    0,
    0,
    img.width,
    img.height,
    centerShift_x,
    centerShift_y,
    img.width * ratio,
    img.height * ratio
  );
}
ScrollTrigger.create({
  trigger: "#canvas>canvas",
  pin: true,
  // markers:true,
  scroller: `#main`,
  start: `top top`,
  end: `80% top`,
});

gsap.to("#canvaspage",{
  scrollTrigger:{
    trigger:`#canvaspage`,
    start:`top top`,
    end:`bottom top`,
    pin:true,
    scroller:`#main`
  }
})
// gsap.to("#page2",{
//   scrollTrigger:{
//     trigger:`#page2`,
//     start:`top top`,
//     end:`bottom top`,
//     pin:true,
//     scroller:`#main`
//   }
// })
// gsap.to("#page3",{
//   scrollTrigger:{
//     trigger:`#page3`,
//     start:`top top`,
//     end:`bottom top`,
//     pin:true,
//     scroller:`#main`
//   }
// })


var clutter = "";

document.querySelector("#pageno2>h1").textContent.split("").forEach(function(dets){
    clutter += `<span>${dets}</span>`

    document.querySelector("#pageno2>h1").innerHTML = clutter;
})

gsap.to("#pageno2>h1>span",{
    scrollTrigger:{
        trigger:`#pageno2>h1>span`,
        start:`top bottom`,
        end:`bottom top`,
        scroller:`#main`,
        scrub:.5,
    },
    stagger:.2,
    color:`#fff`
})

var clutter = "";

document.querySelector("#pageno3>h1").textContent.split("").forEach(function(dets){
    clutter += `<span>${dets}</span>`

    document.querySelector("#pageno3>h1").innerHTML = clutter;
})

gsap.to("#pageno3>h1>span",{
    scrollTrigger:{
        trigger:`#pageno3>h1>span`,
        start:`top bottom`,
        end:`bottom top`,
        scroller:`#main`,
        scrub:.5,
    },
    stagger:.2,
    color:`#fff`
})




