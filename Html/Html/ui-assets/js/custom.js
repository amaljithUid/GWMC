$.fn.hoverBlock = function() {
    // console.log('open');

    $(this).on('mouseover', function(){
        $(this).siblings().removeClass("open");
        $(this).addClass('open');
        $(this).children('').addClass('enebled');
        console.log(this);
    });

    $(this).on('mouseleave', function(){
        if($(this).children().not(".enebled")){
            $(this).removeClass('open');
        }
    });

    //if($(this).hasClass("enebled"))
    
}

$(function(){
    $('.ministries-item').hoverBlock();
    var options = {
        controls: true,
        preload: "auto",
        loop: false,
        techOrder: ['youtube', 'html5'],
        youtube: {
          ytControls: 0
        }
      };
      
});