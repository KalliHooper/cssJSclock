var body = document.getElementsByTagName("BODY")[0];

function scrollSlide(id) {
  document.querySelector('.active').classList.remove('active');
  var targetDiv = document.querySelector(id);
  targetDiv.classList.add('active');
  var y = targetDiv.getBoundingClientRect().top + window.scrollY;
  window.scroll({
    top: y,
    behavior: 'smooth'
  });
  return false;
}

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




