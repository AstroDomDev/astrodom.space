$(document).ready(function() {
    if ($('body').hasClass('admin')) {
    let user = prompt("Username: ");
    let pass = prompt("Password: ")
    if (user == "root" && pass == "pass") {
        $('.cover').css('display', 'none')
    } else {
        alert("Incorrect username or password.")
        location.replace("https://astrodom.space/")
    }
}
})

$(document).on('click', '.return', function() {
    location.replace("https://astrodom.space/")
})
