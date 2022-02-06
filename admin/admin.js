$(document).ready(function() {
    if ($('body').hasClass('admin')) {
    let user = prompt("Username: ");
    let pass = prompt("Password: ")
    if (user == "root" && pass == "240007") {
        $('.cover').css('display', 'none')
    } else {
        alert("Incorrect username or password.")
        location.replace("../index.html")
    }
}
})

$(document).on('click', 'p', function() {
    location.replace("../index.html")
})