$(function(){
var scene = document.getElementById('scene');
var parallaxInstance = new Parallax(scene);
console.log('dsfdasd')
new WOW().init();
 var lang = {
    "html": "90%",
    "css": "80%",
    "javascript": "70%",
    "php": "55%",
    "angular": "65%"
  };

  var multiply = 4;

  $.each( lang, function( language, pourcent) {

    var delay = 500;

    setTimeout(function() {
      $('#'+language+'-pourcent').html(pourcent);
    },delay*multiply);

    multiply++;

  });

  $('.burger-menu').on('click', function() {
    $('.header__menu').slideToggle(300, function(){
         if( $(this).css('display') === "none"){
             $(this).removeAttr('style');
         }
    });

 });

});
