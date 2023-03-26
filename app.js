// add class navbarDark on navbar scroll
var header = document.querySelector('.navbar');
// var active = document.querySelector('.active');

window.onscroll = function() {
    var top = window.scrollY;
    if(top >= 100) {
        header.classList.add('navbarDark');
    }
    else {
        header.classList.remove('navbarDark');
    }
}
