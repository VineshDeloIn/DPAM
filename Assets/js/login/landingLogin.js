$( document ).ready(function() {
    
    $("input").focus(function() {
        $(".mailErr").html("");
        $(".pswdErr").html("");
    });

    $("#loginBtn").click(function () {
        //getting values from the form
        var emailMob = $("#mail").val();
        var password = $("#password").val();

        var isEmailMobValid;  
        var isPasswordValid;

        //Checking if email/mob is not empty
        if(emailMob == "") {
            $(".mailErr").html("Email/MobileNumber Cannot Be Empty!");
            isEmailMobValid = false;
        } else  {
            isEmailMobValid = true;
        }

        //Checking if password is not empty
        if(password == "") {
            $(".pswdErr").html("Password Cannot Be Empty!");
            isPasswordValid = false;
        } else {
            isPasswordValid = true;
        }

        if(isEmailMobValid && isPasswordValid) {
            alert(emailMob + " "+password);
        }
        
        
        //added RememberMe functionality of rememberme is checked, Email and password cannot be empty
        if ($('#remeberMeCbx').is(':checked') && isEmailMobValid && isPasswordValid) {
            // save username and password
            console.log('Entering!');
            localStorage.userName =$("#mail").val();
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