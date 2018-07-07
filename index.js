
const header = document.querySelector('header');
const footer = document.querySelector('footer');
const menu = document.querySelector('ul.nav');
const menuitems = document.querySelectorAll('.inline-items li');


(function() { 
  
  function menutop() {
  
      header.classList.add("fadein");
      footer.classList.add("fadein");
      menu.classList.add('slidein');
      for(var i=0; i<menuitems.length; i++){
        menuitems[i].classList.add('grow');
      }
     
  }

  menutop();
  $('#portfoliolink').hover(function(){
    $(".nav select").click();


  }, function(){

  })
})();

