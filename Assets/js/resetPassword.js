$(document).ready(function () {
    $('.reset-show-password').css('display', 'none');
    $('.reset-confirm-password').bind("cut copy paste", function (e) {


    });

    $("input").focus(function () {

        $(".reset-unequal-password-error").html(" ");
        $(".reset-old-password-error").html(" ");
        $(".reset-confirm-password-error").html(" ");
        $(".reset-invalid-password-error").html(" ");
        $(".reset-password-error").html(" ");

    });


    $('.reset-hide-password').click(function () {
        passtoTextReset();
        $('.reset-hide-password').css('display', 'none');
        $('.reset-show-password').css('display', 'block');

    });
    $('.reset-show-password').click(function () {
        passtoTextReset();
        $('.reset-show-password').css('display', 'none');
        $('.reset-hide-password').css('display', 'block');

    });

    $(".reset-new-password").keyup(function (e) {

        var passWord = $(".reset-new-password").val();

        checkPasswordStrengthReset(passWord);
    });

    $(".reset-confirm-password").keyup(function (e) {

        var passWord = $(".reset-new-password").val();

        checkPasswordStrengthReset(passWord);
    });





    $(".reset-password-form").on('submit', function (event) {

        var oldpasswordCreate = $(".reset-old-password").val();
        var passwordCreate = $(".reset-new-password").val();
        var cnfpasswordCreate = $(".reset-confirm-password").val();
        var isFieldEmpty = false;
        var isPasswordValid = false;


        if (oldpasswordCreate == "") {
            $(".reset-old-password-error").html("Password Cannot Be Empty!");
            // isPasswordValid = false;
            isFieldEmpty = true;
        }

        //Checking if password is not empty
        if (passwordCreate == "") {
            $(".reset-password-error").html("Password Cannot Be Empty!");
            // isPasswordValid = false;
            isFieldEmpty = true;
        }




        if (cnfpasswordCreate == "") {

            $(".reset-confirm-password-error").html("Invalid Password");
            // isPasswordValid = false;
            isFieldEmpty = true;
        }

        if (!comparePassword(passwordCreate, cnfpasswordCreate)) {

            $(".reset-unequal-password-error").html("Passwords do not match");
            isPasswordValid = false;
        } else {
            isPasswordValid = true;
        }

        if (isPasswordValid && !isFieldEmpty) {
            $(".reset-password-form").submit();
        } else {
            event.preventDefault();
        }



    });


});


