 var body = document.querySelector("body")

 var h1= document.querySelector('h1')

 body.addEventListener('keydown',function(dets ){
console.log(dets.code);
     h1.innerHTML = dets.code
 })