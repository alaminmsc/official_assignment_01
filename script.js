$(document).ready(function(){
    $('.service').mouseenter(function(){
        $('.serviceIcon').animate({'margin-left':'60px'});         
    }) 
    $('.service').mouseleave(function(){
        $('.serviceIcon').animate({'margin-left':'0px'});         
    }) 



///fixed header
$(window).on('scroll', function(){
    if($(this).scrollTop() > 20){
        $('.header-menu-section').css({
            "height":"70px",
            "position":'fixed',
            "background-color":"#FFFFFF",
            "top":"0px",
            "right":"0px",
            "left":"0px",
            "bottom":"0px",
            "box-shadow": "0 0 10px 0 rgb(0 0 0 / 10%)",
            "opacity":"1"
        });
    }
    else{
        $('.header-menu-section').css({
            "background-color":"#d0d0da",
            "position":'fixed',
            "top":"40px",
            "right":"0px",
            "left":"0px",
            "bottom":"0px",
            "z-index":'20',
            "opacity":'.8',
            "margin-bottom":'10px'
        });
    }
    $('.a').css({
        "color":"black"
    })
})

//

$('.owl-carousel').owlCarousel({
    items:1,
    autoplay:true,
    autoplayTimeout:2000,
    loop:true,
    animateOut: 'fadeOut'
})


});


