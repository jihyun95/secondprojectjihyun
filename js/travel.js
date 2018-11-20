
$(document).ready(function () {
  $(".gallery-img").click(function(){
    var t = $(this).attr("src");
    $(".modal-body").html("<img src='"+ t +"' class='modal-img'>");
    $("#myModal").modal();
  });
});


var flight=[
    "KL2490","K380","DL640","AA488","AA 1311","OZ 221","SU 103"
   
    ];
    
function pick(){
    var x = flight[Math.round(Math.random()*(flight.length-1))];
    document.getElementById("choose").innerHTML = x;
}

$(function() {
  // This will select everything with the class smoothScroll
  // This should prevent problems with carousel, scrollspy, etc...
  $('.smoothScroll').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000); // The number here represents the speed of the scroll in milliseconds
        return false;
      }
    }
  });
});

// Change the speed to whatever you want
// Personally i think 1000 is too much
// Try 800 or below, it seems not too much but it will make a difference

