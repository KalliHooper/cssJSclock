


function playSound(e){
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)
  //console.log(audio);
  if(!audio) return; //stop the function from running
  audio.currentTime=0;//rewing to the start
  audio.play()
  console.log(key);
  key.classList.add('playing');

}
function removeTransition(e) {
  if (e.propertyName !== 'transform') return; // skip it if it's not a text-transform
this.classList.remove('playing')
  console.log(e.propertyName) }
const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend',removeTransition));
window.addEventListener('keydown',playSound)
//yay!!!!

