$(window).on("load", function() {
    $('.preloader').css('display', 'none')
})

function copy(args) {
    navigator.clipboard.writeText(args);
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