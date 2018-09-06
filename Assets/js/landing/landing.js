$(document).ready(function(){

    $('#loginBtn').on('click',function () {
        // alert('hi')
        $('.landing-image').addClass("clicked");
        $('.landing-content').addClass("slideadd");
        $('#loginBtn:visible').hide();
        $('#SignBtn:visible').hide();
    });

    $('#SignBtn').on('click',function () {
        // alert('hi')
        $('.landing-image').addClass("clicked");
        $('.landing-content').addClass("slideadd");
        $('#loginBtn:visible').hide();
        $('#SignBtn:visible').hide();
    });

    $('#landingSideCloseBtn').on('click',function(){
        $('.landing-image').removeClass("clicked");
        $('.landing-content').removeClass("slideadd");
        $('#loginBtn:hidden').show();
        $('#SignBtn:hidden').show();
    });
});