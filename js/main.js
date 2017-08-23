
//toggle class

const devicon = document.querySelectorAll("i");

function addClass() {
  this.classList.add('colored');

}
function removeClass() {
  this.classList.remove("colored");

}

devicon.forEach(icon => icon.addEventListener("mouseenter", addClass))
devicon.forEach(icon => icon.addEventListener("mouseleave", removeClass))



//Smooth scrooling snippet


$(".navbar-nav li a[href^='#']").on('click', function(e) {
   // prevent default anchor click behavior
   e.preventDefault();

   // store hash
   var hash = this.hash;

   // animate
   $('html, body').animate({
       scrollTop: $(this.hash).offset().top
     }, 300, function(){

       // when done, add hash to url
       // (default click behaviour)
       window.location.hash = hash;
     });

});
