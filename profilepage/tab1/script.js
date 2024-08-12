
var button = document.querySelector("#navleft>a");

button.addEventListener("click", function(dets){
  gsap.to(restleft,{
    left:0,
    opacity:1
  })

  
})


var closebutton = document.querySelector("#rest");
closebutton.addEventListener("click",function(dets){
    gsap.to(restleft,{
        left:-100
    })
})