$(function(){
/* var scene = document.getElementById('scene');
var scene2 = document.getElementById('scene2');
var parallaxInstance = new Parallax(scene);
var parallaxInstance = new Parallax(scene2); */
var scene = document.getElementById('scene');
 var scene2 = document.getElementById('scene2');
 new Parallax(scene);
 new Parallax(scene2);
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


 $('.burger-menu').click(function(event) {
   $('.burger-menu, .header__menu').toggleClass('active')
   $('body').toggleClass('lock')
 })

 $('.service').hover(
   function() {
    $(this).find('.service__img img:first-child').css('display', 'none')
    $(this).find('.service__img img:last-child').css('display', 'block')

   },
   function() {
    $(this).find('.service__img img:first-child').css('display', 'block')
    $(this).find('.service__img img:last-child').css('display', 'none')
   }
 )

 $("nav li a").click(function () {
  elementClick = $(this).attr("href");
  destination = $(elementClick).offset().top;
  $("body,html").animate({scrollTop: destination }, 800);
});

});
