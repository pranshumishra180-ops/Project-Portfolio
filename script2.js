 let lolo = document.querySelector("h4")
 let btn = document.querySelector("#follow")
var check = 0;
//  var removeFreind = document.querySelector("#unfollow")




 btn.addEventListener("click",function(){
if(check==0){
    lolo.innerHTML = "following"
    lolo.style.color = "green"
    btn.innerHTML ="unfollow"
    check =1;

}else{
    lolo.innerHTML ="Stranger"
    lolo.style.color = "red"
    btn.innerHTML ="follow"
    check = 0
}


 })
//  removeFreind.addEventListener("click" , function(){
//   lolo.innerHTML = "unfollow"
//    lolo.style.color = "red"
//  })
 