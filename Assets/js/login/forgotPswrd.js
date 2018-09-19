$(document).ready(function () {



    $("input").focus(function () {
        $(".emailMobForgtPswrdErr").html("");
    });

   

    $( "#forgtPswrdForm" ).on('submit',function( event ) {
        
        // event.preventDefault();
        var emailMob = $("#forgtPswrdMobMail").val();


        var isEmailMobValid = validatePhone(emailMob) || validateEmail(emailMob);


        //Checking if email/mob is not empty
        if (emailMob == "" || !isEmailMobValid) {
            $(".forgtPswrd-mail-err").html("Invalid Email / Mobile Number");
            isEmailMobValid = false;
        } else {
            isEmailMobValid = true;
        }

        if (isEmailMobValid) {
            alert(emailMob);
            $(".forgtPswrdForm").submit();    
        }

       
    });

});