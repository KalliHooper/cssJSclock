  const secondHand = document.querySelector('.second-hand');
  const minuteHand = document.querySelector('.min-hand');
  const hoursHand = document.querySelector('.hour-hand');
  const header = document.querySelector('header');
  const footer = document.querySelector('footer');
  let lastsecond = -1;
  let fadein_flag = true;

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
      if(fadein_flag) {
        header.classList.add("fadein");
        footer.classList.add("fadein");
        fadein_flag = false;
      }
    } else { console.log(lastsecond)}
  
    requestAnimationFrame(clock);
  }


  requestAnimationFrame(clock);