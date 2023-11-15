const menuBtn = document.getElementById("menu-icon");
var navbar = document.querySelector(".navbar");
var icon = document.querySelector("#menu-icon i")
menuBtn.addEventListener('click', function(){
    navbar.classList.toggle('active');
    icon.classList.toggle('fa-xmark');
});
