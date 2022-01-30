$(window).on("load", function() {
    $('.preloader').css('display', 'none')
    var landingEnd = $('.landing').position().top + $('.landing').height();
    var navTop = $(document).scrollTop();
    if (navTop > landingEnd) {
        $('.logo').addClass('hidden')
        $('.contact').addClass('hidden')
        $('.name').addClass('hidden')
    } else {
        $('.logo').removeClass('hidden')
        $('.contact').removeClass('hidden')
        $('.name').removeClass('hidden')
    }
    introLoop(true)
})


    
$(document).on("click", "#4", function(){
    if ($('#4').hasClass('show')) {
        $('#4').removeClass('show')
        introLoop(false)
    }
    });

function introLoop(initial) {
    if (initial == false) {
        var dlay = 1100
    } else {
        var dlay = 5100
    }
    setTimeout(function() {
        $('.slogan #1').addClass('show')
        setTimeout(function() {
            $('.slogan #1').removeClass('show')
            setTimeout(function() {
                $('.slogan #2').addClass('show')
                setTimeout(function() {
                    $('.slogan #2').removeClass('show')
                    setTimeout(function() {
                        $('.slogan #3').addClass('show')
                        setTimeout(function() {
                            $('.slogan #3').removeClass('show')
                            setTimeout(function() {
                                $('.slogan #4').addClass('show')
                            }, 1100)
                        }, 2250)
                    },1100)
                }, 2250)
            },1100)
        }, 2250)
    }, dlay)
}
$(window).scroll(function() {
    var landingEnd = $('.landing').position().top + $('.landing').height();
    var navTop = $(document).scrollTop();

    if (navTop > landingEnd) {
        $('.logo').addClass('hidden')
        $('.contact').addClass('hidden')
        $('.name').addClass('hidden')
    } else {
        $('.logo').removeClass('hidden')
        $('.contact').removeClass('hidden')
        $('.name').removeClass('hidden')
    }
})

