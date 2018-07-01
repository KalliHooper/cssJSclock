
$(document).ready(function () {

  $('#pagepiling').pagepiling({
    menu: '#menu',
    anchors: ['water', 'Drum', 'desert', 'Blurred'],
    sectionsColor: ['#bfda00', '#2ebe21', '#2C3E50', '#51bec4'],
    direction: 'horizontal',
    navigation: {
       'position': 'right',
       'tooltips': ['Home', 'Life', 'Projects', 'Contact']
    },
    afterRender: function(){
       //playing the video
       console.log('callback after render');
    }
 });

  $('.clockprojecticon').on('mouseenter', function () {
    if ($('#clock').css('top') !== '3vh') {
      $('#clock').css('top', '3vh');
    }
  });
  $('.clockprojecticon').on('mouseleave', function () {
    $('#clock').css('top', '250vh');
  });

});
