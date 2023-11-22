var menu = document.querySelector('#menu-icons');
var navbar = document.querySelector('.navbar');

// function show()
// {
//     alert("jshdjh")
//     menu.classList.toggle("fa-xmark");
//     navbar.classList.toggle("open");
// }
menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open');
}