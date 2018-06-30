function scrollSlide(el, targetid) {
  document.querySelectorAll('#nav a.active').forEach(
    function (el) {
      el.classList.remove('active');
    }
  );
  el.classList.add('active');
  var targetDiv = document.querySelector(targetid);
  var y = targetDiv.getBoundingClientRect().top + window.scrollY;
  window.scroll({
    top: y,
    behavior: 'smooth'
  });
}

$(document).ready(function () {

  var rellax = new Rellax('.rellax');

  $('.clockprojecticon').on('mouseenter', function () {
    if ($('#clock').css('top') !== '3vh') {
      $('#clock').css('top', '3vh');
    }
  });
  $('.clockprojecticon').on('mouseleave', function () {
    $('#clock').css('top', '250vh');
  });

});

~(function () {
  "use strict";

  var live = document.getElementById("live"),
    transform = getPrefix(["transform", "WebkitTransform"]),
    letters = live.children,
    numLetters = letters.length,
    r = 0;
  var rotateSteps = [];

  function doSteps() {
    // stop animation when array is empty
    if (rotateSteps.length < 1) return;
    // remove the first element of the rotateSteps array
    var step = rotateSteps.shift();
    // get rotation
    var r = step.rotate;
    // get milliseconds to pause after this step
    var w = step.thenWait;
    // rotate entire container
    live.style[transform] = "rotateY(" + r + "deg)";
    // negate container rotation so letters face forward
    for (var i = 0; i < numLetters; i++) {
      letters[i].style[transform] = "rotateY(" + -r + "deg)";
      // adjust letter color based on position and rotation
      var c = 70 - (i - 1.5) * Math.sin(r * Math.PI / 180) * 40;
      letters[i].style.color = "hsl(240, 100%, " + c + "%)";
    }
    // if delay, wait and then request next frame (call this function again)
    if (w > 0) {
      setTimeout(function () {
        requestAnimationFrame(doSteps);
        $('#logo').addClass('set');
      }, w);
    }
  }

  function getPrefix(prefixes) {
    for (var test, i = 0;
      (test = prefixes[i++]);) {
      if (typeof document.body.style[test] != "undefined") return test;
    }
    return null;
  }

  var wait = 10;

  for (var r = 180; r >= -40; r = r - 10) {
    rotateSteps.push({
      rotate: r,
      thenWait: wait
    });
    wait += 10;
  }

  rotateSteps[0].thenWait = 1200;

  doSteps();
})();

