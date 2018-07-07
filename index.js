
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
    $(".nav ul").css({'top':0,'left':0});
    $(".nav ul").position({'my':'center top ', 'at':'center bottom ','of':this}); 
     $(".nav ul").show();
  }, function(){
  
  })
  
  $('.nav ul').hover(function(){
    $(".nav ul").show();
  }, function(){
    $(".nav ul").hide();
  })

})();


