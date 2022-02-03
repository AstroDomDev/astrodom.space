$(window).on("load", function() {
    $('.preloader').css('display', 'none')
    setTimeout(function() {intro()}, 2000)
})


$(document).on("click", "#4", function() {
    if ($('.slogan #4').hasClass('show')) {
        intro()
    }
})


function intro() {
    if ($('.slogan #4').hasClass('show')) {
    var dlay = 1100
    $('.slogan #4').removeClass('show')
    $('.slogan #4').removeClass('final')
    } else {
        var dlay = 0
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
                            setTimeout(function() {
                                $('.slogan #4').addClass('final')
                                $('.slogan #planet').addClass('visible')
                            },2000)
                    }, 1100)
                }, 2250)
            }, 1100)
        }, 2250)
    }, 1100)
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