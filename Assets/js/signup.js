$(document).ready(function () {
    $(".pass-input ul li").css("list-style-type", "none");
    $('.sign-up-show-password').css('display', 'none');
    $('.cnfpasswordSignUp').bind("cut copy paste", function (e) {
        // e.preventDefault();

    });

    $('[data-toggle="tooltip"]').tooltip();


    $("input").focus(function () {
        $(".signup-mail-err").html("");
        $(".signup-pswrd-err").html("");
        $(".signup-invalid-mail-err").html("");
        $(".signup-invalid-pswrd-err").html("");
        $(".signup-cnfpswrd-err").html("");

        var email = $(".mailSignUp").val();



    });



    // function to show password

    $('.sign-up-hide-password').click(function () {
        passtoTextSignUp();
        $('.sign-up-hide-password').css('display', 'none');
        $('.sign-up-show-password').css('display', 'block');

    });
    $('.sign-up-show-password').click(function () {
        passtoTextSignUp();
        $('.sign-up-show-password').css('display', 'none');
        $('.sign-up-hide-password').css('display', 'block');

    });

    $(".mailSignUp").keyup(function (e) {

        $(".signup-mail-err").html(" ");
        $(".signup-invalid-mail-err").html(" ");
    });


    $(".passwordSignUp").keyup(function (e) {

        var passWord = $(".passwordSignUp").val();

        changeTooltipColor(passWord);
        checkPasswordStrength(passWord);
    });

    $(".cnfpasswordSignUp").keyup(function (e) {

        var passWord = $(".passwordSignUp").val();

        checkPasswordStrength(passWord);
    });



    // Empty Fields Validation

    $(".signupForm").on('submit', function (event) {

        //event.preventDefault();
        //getting values from the form
        var emailMob = $(".mailSignUp").val();
        var password = $(".passwordSignUp").val();
        var cnfpassword = $(".cnfpasswordSignUp").val();
        var isFieldEmpty = false;

        //Checking if email/mob is not empty
        if (emailMob == "") {
            $(".signup-mail-err").html("Email/Mobile Number Cannot Be Empty!");
            $('.mailSignUp').val('');
            isEmailMobValid = false;
        } else {
            isEmailMobValid = true;
        }

        //Checking if password is not empty
        if (password == "") {
            $(".signup-pswrd-err").html("Password Cannot Be Empty!");
            // isPasswordValid = false;
            isFieldEmpty = true;
        }

        if (!validatePhone(emailMob) && (!validateEmail(emailMob))) {

            $(".signup-invalid-mail-err").html("Invalid Email/Phone number ");
            isEmailMobValid = false;
        }


        if (cnfpassword == "") {

            $(".signup-cnfpswrd-err").html("Invalid Password");
            // isPasswordValid = false;
            isFieldEmpty = true;
        }


        if (!comparePassword(password, cnfpassword)) {

            $(".signup-unequal-pswrd-err").html("Passwords do not match");
            isPasswordValid = false;
        } else {
            isPasswordValid = true;
        }

        if (isEmailMobValid && isPasswordValid && !isFieldEmpty) {
            $(".signupForm").submit();
        } else {
            event.preventDefault();
        }
        // event.preventDefault();

    });


});


