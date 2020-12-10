let abme=document.getElementById("aboutme");
let wexp=document.getElementById("workexperience");
let projects=document.getElementById("projects");
let edu=document.getElementById("education");
let cdet=document.getElementById("contactdetails");

abme.addEventListener("click",function(){
    let scrollDiv= document.querySelector(".about-container").offsetTop-100;
    window.scrollTo({ top: scrollDiv, behavior: 'smooth'});
});

wexp.addEventListener("click",function(){
    let scrollDiv= document.querySelector(".process-wrapper").offsetTop-200;
    window.scrollTo({ top: scrollDiv, behavior: 'smooth'});
});

projects.addEventListener("click",function(){
    let scrollDiv= document.querySelector(".services").offsetTop;
    window.scrollTo({ top: scrollDiv, behavior: 'smooth'});
});

edu.addEventListener("click",function(){
    let scrollDiv= document.querySelector(".timeline").offsetTop-100;
    window.scrollTo({ top: scrollDiv, behavior: 'smooth'});
});

cdet.addEventListener("click",function(){
    let scrollDiv= document.querySelector("#popo").offsetTop-100;
    window.scrollTo({ top: scrollDiv, behavior: 'smooth'});
});