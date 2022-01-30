$(window).on("load", function() {
    $('.preloader').css('display', 'none')
})

function copy(args) {
    navigator.clipboard.writeText(args);
}