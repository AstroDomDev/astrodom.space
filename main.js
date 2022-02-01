$(window).on("load", function() {
    $('.preloader').css('display', 'none')
    setTimeout(function() {intro()}, 2000)
})


$(document).on("click", "#4", function() {
    if ($('.slogan #4').hasClass('show')) {
        intro()
    }
})

function copy(args) {
    navigator.clipboard.writeText(args);
}

function intro() {
    if ($('.slogan #4').hasClass('show')) {
    var dlay = 1100
    $('.slogan #4').removeClass('show')
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
                            },2750)
                    }, 1100)
                }, 2250)
            }, 1100)
        }, 2250)
    }, 1100)
}, 2250)
}, dlay)
}

var lastScroll = 0;
$('body').scroll(function()
{
var nowScrollTop = $(this).scrollTop();
if (nowScroll > lastScroll){
    $('nav').addClass('hidden')
} else if (nowScroll < lastScroll) {
    $('nav').addClass('hidden')
}
lastScroll = nowScroll;
});