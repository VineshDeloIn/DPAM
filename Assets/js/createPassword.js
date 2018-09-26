$(document).ready(function () {
    $('.create-show-password').css('display', 'none');
    $('.confirm-password-create').bind("cut copy paste", function (e) {
        // e.preventDefault();

    });
    $("input").focus(function () {

        $(".create-unequal-pswrd-err").html(" ");
        $(".create-pswrd-err").html(" ");
        $(".create-invalid-pswrd-err").html(" ");
        $(".create-cnfpswrd-err").html(" ");

    });



    $('.create-hide-password').click(function () {
        passtoTextCreate();
        $('.create-hide-password').css('display', 'none');
        $('.create-show-password').css('display', 'block');

    });
    $('.create-show-password').click(function () {
        passtoTextCreate();
        $('.create-show-password').css('display', 'none');
        $('.create-hide-password').css('display', 'block');

    });


    $(".password-create").keyup(function (e) {

        var passWord = $(".password-create").val();

        checkPasswordStrengthCreate(passWord);
    });

    $(".confirm-password-create").keyup(function (e) {

        var passWord = $(".password-create").val();

        checkPasswordStrengthCreate(passWord);
    });





    $(".create-password-form").on('submit', function (event) {


        var passwordCreate = $(".password-create").val();
        var cnfpasswordCreate = $(".confirm-password-create").val();
        var isFieldEmpty = false;


        //Checking if password is not empty
        if (passwordCreate == "") {
            $(".create-pswrd-err").html("Password Cannot Be Empty!");
            isFieldEmpty = true;
        }



        if (cnfpasswordCreate == "") {

            $(".create-cnfpswrd-err").html("Invalid Password");
            isFieldEmpty = true;
        }

        if (!comparePassword(passwordCreate, cnfpasswordCreate)) {

            $(".create-unequal-pswrd-err").html("Passwords do not match");
            isPasswordValid = false;
        } else {
            isPasswordValid = true;
        }

        if (isPasswordValid && !isFieldEmpty) {
            $(".create-password-form").submit();
        } else {
            event.preventDefault();
        }



    });


});


