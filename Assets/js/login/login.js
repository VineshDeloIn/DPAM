

window.onload = function () {
    // if (emailMob == "" && !isEmailMobValid) {
    //     $('.loginMail').val('');
    //     }
    //     $('.loginPassword').val('');
    //     $('.remeberMeCbx').prop('checked', false); 

    var getUrlAfterHash = window.location.hash;

    if (getUrlAfterHash == "#login") {

        $('.landing-image').addClass("clicked");
        $('.landing-slide-content').addClass("slideadd");
        $('.conOfRentAdj').addClass("clicked");
        $('.loginBtnAdj:visible').hide();
        $('.singUpBtnAdj:visible').hide();
        $('.login-main').show();
        $('.signup-main-margin').hide();
    }
    else if (getUrlAfterHash == "#signup") {

        $('.landing-image').addClass("clicked");
        $('.landing-slide-content').addClass("slideadd");
        $('.conOfRentAdj').addClass("clicked");
        $('.loginBtnAdj:visible').hide();
        $('.singUpBtnAdj:visible').hide();
        $('.signup-main-margin').show();
        $('.login-main').hide();

    }
}


$(document).ready(function () {

    //getting values from the form
    var emailMob = $(".loginMail").val();
    var password = $(".loginPassword").val();

    var isEmailMobValid;

    if (emailMob == "" && !isEmailMobValid) {
        $('.loginMail').val('');
    }
    $('.loginPassword').val('');
    $('.remeberMeCbx').prop('checked', false);

    $('.sign-scs-close-toast').css("float","right");
    $('.sign-scs-close-toast').on('click', function () {
        alert("here");
        
         $('.login-sign-sucs').hide();
    });

    // $('.sign-error-close-toast').on('click', function () {
    //     $('.login-sign-err').hide();
    // });

    $('.loginSignUpTxt').on('click', function () {

        $('.landing-image').addClass("clicked");
        $('.landing-slide-content').addClass("slideadd");
        $('.conOfRentAdj').addClass("clicked");
        $('.loginBtnAdj:visible').hide();
        $('.singUpBtnAdj:visible').hide();
        $('.signup-main-margin').show();
        $('.login-main').hide();

    });

    $('.signup-clickable-text').on('click', function () {

        $('.landing-image').addClass("clicked");
        $('.landing-slide-content').addClass("slideadd");
        $('.conOfRentAdj').addClass("clicked");
        $('.loginBtnAdj:visible').hide();
        $('.singUpBtnAdj:visible').hide();
        $('.login-main').show();
        $('.signup-main-margin').hide();

    });



    $('.loginBtnAdj').on('click', function () {
        // alert('hi login');
        $('.landing-image').addClass("clicked");
        $('.landing-slide-content').addClass("slideadd");
        $('.conOfRentAdj').addClass("clicked");
        $('.loginBtnAdj:visible').hide();
        $('.singUpBtnAdj:visible').hide();
        $('.login-main').show();
        $('.signup-main-margin').hide();

    });




    $('.singUpBtnAdj').on('click', function () {
        // alert('hi signup');
        $('.landing-image').addClass("clicked");
        $('.landing-slide-content').addClass("slideadd");
        $('.conOfRentAdj').addClass("clicked");
        $('.loginBtnAdj:visible').hide();
        $('.singUpBtnAdj:visible').hide();
        $('.signup-main-margin').show();
        $('.login-main').hide();
    });

    $('.landingSideCloseBtn').on('click', function () {
        $('.landing-image').removeClass("clicked");
        $('.landing-slide-content').removeClass("slideadd");
        $('.conOfRentAdj').removeClass("clicked");
        $('.loginBtnAdj:hidden').show();
        $('.singUpBtnAdj:hidden').show();
    });


    $("input").focus(function () {
        $(".login-mail-err").html("");
        $(".login-pswrd-err").html("");
    });

    $(".loginForm").on('submit', function (event) {
event.preventDefault();
        var emailMob = $(".loginMail").val();
        var password = $(".loginPassword").val();
        isEmailMobValid = validatePhone(emailMob) || validateEmail(emailMob);
        var isPasswordValid = false;

        //Checking if email/mob is not empty
        if (emailMob == "" || !isEmailMobValid) {
            //alert("here");
            $(".login-mail-err").html("Invalid Email / Mobile Number");
            isEmailMobValid = false;
        } else {
            isEmailMobValid = true;
        }

        //Checking if password is not empty
        if (password == "") {
            $(".login-pswrd-err").html("Incorrect Password");
            isPasswordValid = false;
        } else {
            isPasswordValid = true;
        }


        //added RememberMe functionality of rememberme is checked, Email and password cannot be empty
        if ($('.remeberMeCbx').is(':checked') && isEmailMobValid && isPasswordValid) {
            // save username and password
            console.log('Entering!');
            localStorage.userName = $(".loginMail").val();
            localStorage.password = $(".loginPassword").val();
            localStorage.checkBoxValidation = $('.remeberMeCbx').val();
        } else {
            localStorage.userName = '';
            localStorage.password = '';
            localStorage.checkBoxValidation = '';
        }

        if (isEmailMobValid && isPasswordValid) {
            $(".loginForm").submit();
        }
        
    });

});