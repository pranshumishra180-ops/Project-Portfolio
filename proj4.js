//  var chutki =  document.querySelector("img")

//  var msg = document.querySelector("h2 span ")


//   var body = document.querySelector("body")

//  chutki.addEventListener("mouseenter",function(){
//     msg.innerHTML = "chutki se door ho jaaa 🤬🤬🤬"
//     body.style.background = " red"
//  })
//  chutki.addEventListener("mouseleave",function(){
//     msg.innerHTML = "goood ab door hi rehna !!! 🤬🤬🤬"
//       body.style.background = "black" 

//    })

 var main = document.querySelector("#main")

var cursor = document.querySelector("#cursor")


 main.addEventListener("mousemove",function(dets){

 cursor.style.left = dets.x + 'px'  
 cursor.style.top = dets.y + 'px'
 
  })