$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.navbar').addClass('fixing');
        } else {
            $('.navbar').removeClass('fixing');
        }
    });
}); 