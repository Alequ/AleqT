const devicon = document.querySelectorAll("i");

function addClass() {
  this.classList.add('colored');

}
function removeClass() {
  this.classList.remove("colored");
  
}

devicon.forEach(icon => icon.addEventListener("mouseenter", addClass))
devicon.forEach(icon => icon.addEventListener("mouseleave", removeClass))
