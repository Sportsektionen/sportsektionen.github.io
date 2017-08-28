$(document).ready(function(){
    
    $('a[href^="http://"], a[href^="https://"]').attr('target', '_blank');

    
  $('a[data-imagelightbox="demo"]').imageLightbox({
  selector:       'a[data-imagelightbox]',
  id:             'imagelightbox',
  allowedTypes:   'png|jpg|jpeg|gif',
  animationSpeed: 250,
  activity:       false,
  arrows:         true,
  button:         true,
  caption:        true,
  enableKeyboard: true,
  lockBody:       false,
  navigation:     false,
  overlay:        false,
  preloadNext:    true,
  quitOnEnd:      true,
  quitOnImgClick: false,
  quitOnDocClick: true,
  quitOnEscKey:   true
});

    
});



function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}
