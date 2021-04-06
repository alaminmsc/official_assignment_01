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
            "opacity":"1",
            "z-index":"100"
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
    $('.position').slideDown();
    $('.position').css("display","block");
})

$('.staff-1').mouseleave(function(){
    $('.position').css("display","none");
})

$('.staff-1').hover(function(){
    $('.social-link').slideDown();
    $('.social-link').css("display","block");
})

$('.staff-1').mouseleave(function(){
    $('.social-link').css("display","none");
})


//staff-2
$('.staff-2').hover(function(){
    $('.position-2').slideDown();
    $('.position-2').css("display","block");
})

$('.staff-2').mouseleave(function(){
    $('.position-2').css("display","none");
})

$('.staff-2').hover(function(){
    $('.social-link-2').slideDown();
    $('.social-link-2').css("display","block");
})

$('.staff-2').mouseleave(function(){
    $('.social-link-2').css("display","none");
})

//staff-3
$('.staff-3').hover(function(){
    $('.position-3').slideDown();
    $('.position-3').css("display","block");
})

$('.staff-3').mouseleave(function(){
    $('.position-3').css("display","none");
})

$('.staff-3').hover(function(){
    $('.social-link-3').slideDown();
    $('.social-link-3').css("display","block");
})

$('.staff-3').mouseleave(function(){
    $('.social-link-3').css("display","none");
})

//staff-4
$('.staff-4').hover(function(){
    $('.position-4').slideDown();
    $('.position-4').css("display","block");
})

$('.staff-4').mouseleave(function(){
    $('.position-4').css("display","none");
})

$('.staff-4').hover(function(){
    $('.social-link-4').slideDown();
    $('.social-link-4').css("display","block");
})

$('.staff-4').mouseleave(function(){
    $('.social-link-4').css("display","none");
})


//staff-5
$('.staff-5').hover(function(){
    $('.position-5').slideDown();
    $('.position-5').css("display","block");
})

$('.staff-5').mouseleave(function(){
    $('.position-5').css("display","none");
})

$('.staff-5').hover(function(){
    $('.social-link-5').slideDown();
    $('.social-link-5').css("display","block");
})

$('.staff-5').mouseleave(function(){
    $('.social-link-5').css("display","none");
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



//portfolion photo
$('.portfolio-1').hover(function(){
    $('.portfolio-up').slideDown();
    $('.portfolio-up').css("display","block");
})

$('.portfolio-1').mouseleave(function(){
    $('.portfolio-up').css({
        "display":"none"
    });
})

$('.portfolio-1').hover(function(){
    $('.project-icon').slideUp();
    $('.project-icon').css("display","block");
})

$('.portfolio-1').mouseleave(function(){
    $('.project-icon').css("display","none");
})

//portfolion photo-2
$('.portfolio-2').hover(function(){
    $('.portfolio-up-2').slideDown();
    $('.portfolio-up-2').css("display","block");
})

$('.portfolio-2').mouseleave(function(){
    $('.portfolio-up-2').css({
        "display":"none"
    });
})

$('.portfolio-2').hover(function(){
    $('.project-icon-2').slideUp();
    $('.project-icon-2').css("display","block");
})

$('.portfolio-2').mouseleave(function(){
    $('.project-icon-2').css("display","none");
})

//portfolion photo-3
$('.portfolio-3').hover(function(){
    $('.portfolio-up-3').slideDown();
    $('.portfolio-up-3').css("display","block");
})

$('.portfolio-3').mouseleave(function(){
    $('.portfolio-up-3').css({
        "display":"none"
    });
})

$('.portfolio-3').hover(function(){
    $('.project-icon-3').slideUp();
    $('.project-icon-3').css("display","block");
})

$('.portfolio-3').mouseleave(function(){
    $('.project-icon-3').css("display","none");
})

//portfolion photo-4
$('.portfolio-4').hover(function(){
    $('.portfolio-up-4').slideDown();
    $('.portfolio-up-4').css("display","block");
})

$('.portfolio-4').mouseleave(function(){
    $('.portfolio-up-4').css({
        "display":"none"
    });
})

$('.portfolio-4').hover(function(){
    $('.project-icon-4').slideUp();
    $('.project-icon-4').css("display","block");
})

$('.portfolio-4').mouseleave(function(){
    $('.project-icon-4').css("display","none");
})


//portfolion photo-5
$('.portfolio-5').hover(function(){
    $('.portfolio-up-5').slideDown();
    $('.portfolio-up-5').css("display","block");
})

$('.portfolio-5').mouseleave(function(){
    $('.portfolio-up-5').css({
        "display":"none"
    });
})

$('.portfolio-5').hover(function(){
    $('.project-icon-5').slideUp();
    $('.project-icon-5').css("display","block");
})

$('.portfolio-5').mouseleave(function(){
    $('.project-icon-5').css("display","none");
})

//portfolion photo-6
$('.portfolio-6').hover(function(){
    $('.portfolio-up-6').slideDown();
    $('.portfolio-up-6').css("display","block");
})

$('.portfolio-6').mouseleave(function(){
    $('.portfolio-up-6').css({
        "display":"none"
    });
})

$('.portfolio-6').hover(function(){
    $('.project-icon-6').slideUp();
    $('.project-icon-6').css("display","block");
})

$('.portfolio-6').mouseleave(function(){
    $('.project-icon-6').css("display","none");
})
