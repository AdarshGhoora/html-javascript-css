$(document).ready(function(){
  $('.next').on('click', function(){
    var currentImg = $('.active');
    var nextImg = currentImg.next();

    if(nextImg.length){
      currentImg.removeClass('active').css('z-index', -10);
      nextImg.addClass('active').css('z-index', 10);
    }
  });

  $('.prev').on('click', function(){
    var currentImg = $('.active');
    var prevImg = currentImg.prev();

    if(prevImg.length){
      currentImg.removeClass('active').css('z-index', -10);
      prevImg.addClass('active').css('z-index', 10);
    }
  });
  function slider(){
    $current=$('img.active');
    if($current.length==0){
        $('img:first-child').addClass('active');
    }else{
        $next=$current.removeClass('active').next();
        if($next.length==0){
            $('img:first-child').addClass('active');
        }else{
            $next.addClass('active');
        }
    }
}
setInterval(slider,5000);
});


