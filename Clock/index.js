  const secondHand = document.querySelector('.second-hand');
  const minuteHand = document.querySelector('.min-hand');
  const hoursHand = document.querySelector('.hour-hand');
  const header = document.querySelector('header');
  const footer = document.querySelector('footer');
  const menu = document.querySelector('ul.nav');
  const menuitems = document.querySelectorAll('.inline-items li');
  const now = new Date();
  let lastsecond = now.getSeconds();
  let init_delay = lastsecond;

  function clock() {
    const now = new Date();
    const seconds = now.getSeconds();
    if(seconds !== lastsecond){
      lastsecond = seconds;  
      const secondsDegrees = ((seconds / 60) * 360) + 90;
      secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
      const mins = now.getMinutes();
      const minutesDegrees = ((mins / 60) * 360) + 90;
      minuteHand.style.transform = `rotate(${minutesDegrees}deg)`
      const hours = now.getHours();
      const hoursDegrees = ((hours / 12) * 360) + 90;
      hoursHand.style.transform = `rotate(${hoursDegrees}deg)`
      if(init_delay) {
        header.classList.add("fadein");
        footer.classList.add("fadein");
        menu.classList.add('slidein');
        for(var i=0; i<menuitems.length; i++){
          menuitems[i].classList.add('grow');
        }
        init_delay = false;
      }
    }
  
    requestAnimationFrame(clock);
  }

  requestAnimationFrame(clock);

 /* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
if (!event.target.matches('.dropbtn')) {

  var dropdowns = document.getElementsByClassName("dropdown-content");
  var i;
  for (i = 0; i < dropdowns.length; i++) {
    var openDropdown = dropdowns[i];
    if (openDropdown.classList.contains('show')) {
      openDropdown.classList.remove('show');
    }
  }
}
}