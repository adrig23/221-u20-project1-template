
window.addEventListener("load",() => {
  window.addEventListener('keypress', checkKeyPress)
})

/*
 * Check ascii code for spacebar and call goToLocation in global to change URL
 */
function checkKeyPress(event) {
  if (event.keyCode == 32)
  console.log(event.keycode);{
    goToLocation('/feed');
  }
}
document.addEventListener("DOMContentLoaded", function(){  
  const fadeText = document.getElementById("fade_text");
  if(fadeText){
    fadeText.addEventListener("click", function (){
      goToLocation('/feed');
    });
  }
});