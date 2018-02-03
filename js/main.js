
//toggle class dev icon

const devicon =Array.from(document.querySelector(".skillsGrid").children);


function addClass() {
  this.classList.add('colored');

}
function removeClass() {
  this.classList.remove("colored");

}

devicon.forEach(icon => icon.addEventListener("mouseenter", addClass))
devicon.forEach(icon => icon.addEventListener("mouseleave", removeClass))



//Smooth scrooling


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

$(function() {
  $('.scrollDown').on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 500, 'linear');
  });
});


//Menu toggle
$(".menu-collapsed").click(function() {
  $(this).toggleClass("menu-expanded");
});
