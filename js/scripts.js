$(function(){

});

$(window).scroll(function(){
    if ($(window).scrollTop() > (0.75 * $(window).height()) ) { 
        $('nav').addClass('backgrounded'); 
    } else {
        $('nav').removeClass('backgrounded');
    }
});