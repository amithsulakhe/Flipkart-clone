let flag=0;
function controller(x){
    flag=flag+x
    slideshow(flag)
}
function slideshow(num){
    console.log(num)
    let slides=document.querySelectorAll(".slide")
    if(flag==slides.length){
        flag=0
        num=0
    }
    if(flag<0){
        flag=slides.length-1
        num=slides.length-1

    }

    for(let y of slides){
        y.style.display="none"
    }
    slides[num].style.display="block"
}
setInterval(()=>{
    slideshow(flag=flag+1)
},5000)

let num=15;
let next=document.querySelector(".next1");
let previous=document.querySelector(".prev1");
let contentflag=0;
function controllerflag(x){
    let columns=document.querySelector(".column2");
    if(x==-25){
        num=num+x;
        columns.style.left=`${num}%`
        columns.style.overflow="visible"
        columns.style.transition="0.35s"
        next.style.display="none"
        previous.style.display="block"
    }
    else{
        num=num+x;
        columns.style.left=`${num}%`
        columns.style.overflow="visible"
        columns.style.transition="0.35s"
        next.style.display="block"
        previous.style.display="none"
        columns.style.overflow="hidden"

    }
}