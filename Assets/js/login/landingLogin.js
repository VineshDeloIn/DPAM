$(document).ready(function () {

    $("input").focus(function () {
        $(".mailErr").html("");
        $(".pswdErr").html("");
    });

    $("#loginBtn").click(function () {
        //getting values from the form
        var emailMob = $("#mail").val();
        var password = $("#password").val();

        function  validatePhone(txtPhone) {
            var  filter  =  /^(?:\+971|00971|0)?(?:50|51|52|55|56|54|57)\d{7}$/;
            if  (filter.test(txtPhone)) {
                if (txtPhone.length == 10) {
                    return  true;
                }
                return  false;
            }
        }

        function  validateEmail(email) {
            var  emailReg  =  /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
            return  emailReg.test( email );
        }
        var isEmailMobValid = validatePhone(emailMob) || validateEmail(emailMob);
        var isPasswordValid;

        //Checking if email/mob is not empty
        if (emailMob == "" || !isEmailMobValid) {
            $(".mailErr").html("Invalid Email / Mobile Number");
            isEmailMobValid = false;
        } else {
            isEmailMobValid = true;
        }

        //Checking if password is not empty
        if (password == "") {
            $(".pswdErr").html("Incorrect Password");
            isPasswordValid = false;
        } else {
            isPasswordValid = true;
        }

        if (isEmailMobValid && isPasswordValid) {
            alert(emailMob + " " + password);
        }


        //added RememberMe functionality of rememberme is checked, Email and password cannot be empty
        if ($('#remeberMeCbx').is(':checked') && isEmailMobValid && isPasswordValid) {
            // save username and password
            console.log('Entering!');
            localStorage.userName = $("#mail").val();
            localStorage.password = $("#password").val();
            localStorage.checkBoxValidation = $('#remeberMeCbx').val();
        } else {
            localStorage.userName = '';
            localStorage.password = '';
            localStorage.checkBoxValidation = '';
        }

        $('#mail').val('');
        $('#password').val('');
        $('#remeberMeCbx').prop('checked', false);
    });


});