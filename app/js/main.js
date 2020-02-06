$(function(){
var scene = document.getElementById('scene');
var scene2 = document.getElementById('scene2');
var parallaxInstance = new Parallax(scene);
var parallaxInstance = new Parallax(scene2);
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

 $('.header .services').hover(
   function() {
    $(this).find('.services__img img:first-child').css('display', 'none')
    $(this).find('.services__img img:last-child').css('display', 'block')

   },
   function() {
    $(this).find('.services__img img:first-child').css('display', 'block')
    $(this).find('.services__img img:last-child').css('display', 'none')
   }
 )

 var off = $(".skill__wrapper").offset();



$('.skill__wrapper').scroll(function() {
 alert('asdasdasd')
})




 new CircleProgress('.progress', {
	max: 100,
	value: 60,
  textFormat: 'percent',
  animationDuration: 2000
});

new CircleProgress('.progress2', {
	max: 100,
	value: 35,
	textFormat: 'percent',
});

new CircleProgress('.progress3', {
	max: 100,
	value: 75,
	textFormat: 'percent',
});

new CircleProgress('.progress4', {
	max: 100,
	value: 40,
	textFormat: 'percent',
});

});
