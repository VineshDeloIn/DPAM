$(document).ready(function () {
    $(document).on('scroll', function () {
        if ($(this).scrollTop() > 1) {
            $('.headerNav').addClass('headerNavOnScroll');
        } else {
            $('.headerNav').removeClass('headerNavOnScroll');
        }
    });
});