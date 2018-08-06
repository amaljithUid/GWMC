$.fn.hoverBlock = function() {
    // console.log('open');
    $(this).on('mouseover', function(){
        $(this).siblings().removeClass("open");
        $(this).addClass('open');
        console.log(this);
    });
    
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