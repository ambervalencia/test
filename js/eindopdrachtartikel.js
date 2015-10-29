var menuIcon = document.getElementById("menu-icon");
var menuList = document.getElementById("menu-list");
menuList.classList.add("is-hidden");

menuIcon.addEventListener('click', function(e) {
    e.preventDefault();
    menuList.classList.toggle('is-hidden');
});








