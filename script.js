$(document).ready(function(){
    $('.service').mouseenter(function(){
        $('.serviceIcon').animate({'margin-left':'60px'});         
    }) 
    $('.service').mouseleave(function(){
        $('.serviceIcon').animate({'margin-left':'0px'});         
    }) 



///fixed header
$(window).on('scroll', function(){
    if($(this).scrollTop() > 100){
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
            "z-index":'50',
            "opacity":'.8',
        });
    }
    $('.a').css({
        "color":"black"
    })

})

//staff


$('.staff-1').hover(function(){
    $('.position').slideDown(1000);
    $('.position').css("display","block");
})

$('.staff-1').mouseleave(function(){
    $('.position').css("display","none");
})

$('.staff-1').hover(function(){
    $('.social-link').slideDown(1000);
    $('.social-link').css("display","block");
})

$('.staff-1').mouseleave(function(){
    $('.social-link').css("display","none");
})


//staff-2
$('.staff-2').hover(function(){
    $('.position-2').slideDown(1000);
    $('.position-2').css("display","block");
})

$('.staff-2').mouseleave(function(){
    $('.position-2').css("display","none");
})

$('.staff-2').hover(function(){
    $('.social-link-2').slideDown(1000);
    $('.social-link-2').css("display","block");
})

$('.staff-2').mouseleave(function(){
    $('.social-link-2').css("display","none");
})



//

$('.owl-carousel').owlCarousel({
    items:1,
    autoplay:true,
    autoplayTimeout:2000,
    loop:true,
    animateOut: 'fadeOut'
})

//Counter 

$('.count').counterUp({
    delay: 5,
    time: 500
    });

});


