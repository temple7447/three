const close = document.querySelector(".close")
const sidebar = document.querySelector(".sidebar")
const open = document.querySelector(".open")



close.style.display="none"
sidebar.style.display="none"

close.addEventListener('click',()=>{
sidebar.style.display="none";
open.style.display="block"
close.style.display="none"

// sidebar.style.transition="4s"
});


open.addEventListener("click",()=>{
    sidebar.style.display="block";
    close.style.display="block"
    open.style.display="none"
    close.style.transform="scaleX(4.4)"
    // sidebar.style.transition="4s"


});