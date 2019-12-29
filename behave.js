
setTimeout(up, 40);

function up() {
    window.scrollTo(0,0);
  }


$(document).ready(function(){
    $("h3 span:first-child").delay("700").fadeIn(200);
    $("h3 span:nth-child(2)").delay("1000").fadeIn(200);
    $("h3 span:nth-child(3)").delay("1300").fadeIn(200);
    $("h3 span:nth-child(4)").delay("1600").fadeIn(200);
    $("h3 span:nth-child(5)").delay("1900").fadeIn(200);
    $("h3 span:nth-child(6)").delay("2200").fadeIn(200);

    $(".slider-loan").css({display: "none"}).delay("1000").slideDown(1000);
    $(".slider-refi").css({display: "none"}).delay("1250").slideDown(1000);



  });

 