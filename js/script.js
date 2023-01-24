const header = document.querySelector("header");

window.addEventListener("scroll", function(){
    console.log(window.scrollY)
    header.classList.toggle("sticky", window.scrollY > 80);
});