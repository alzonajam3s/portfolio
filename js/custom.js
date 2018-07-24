// NAVBAR
$(document).ready(function(){       
    var scroll_start = 0;
    var startchange = $('#startchange');
    var offset = startchange.offset();
        if (startchange.length){
    $(document).scroll(function() { 
        scroll_start = $(this).scrollTop();
        if(scroll_start > offset.top) {
              $(".navbar-default").css('background-color', 'rgba(0, 0, 0, 0.5)');
//              $(".kulay").css('color', 'rgba(255, 255, 255, 0.8)');
//              $(".first-set").css('color', 'transparent');
//              $(".second-set").css('display', 'none');
           } else {
              $('.navbar-default').css('background-color', 'transparent');
//              $('.kulay').css('color', 'rgba(0, 0, 0, 0.7)');
//             $(".first-set").css('color', 'rgba(0, 0, 0, 0.75)');
//              $(".second-set").css('display', '');
           }
       });
    }
});


