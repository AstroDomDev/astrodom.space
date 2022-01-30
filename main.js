$(window).on("load", function() {
    $('.preloader').css('display', 'none')
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

