$(document).ready(function () {

    $("input").focus(function () {
        $(".mailErr").html("");
        $(".pswdErr").html("");
    });

    $( "#loginForm" ).on('submit',function( event ) {

        event.preventDefault();

        //getting values from the form
        var emailMob = $("#mail").val();
        var password = $("#password").val();


        
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

     
        if(emailMob == "" && !isEmailMobValid){
            $('#mail').val('');
        }
        
        $('#password').val('');
        $('#remeberMeCbx').prop('checked', false);
    });


});