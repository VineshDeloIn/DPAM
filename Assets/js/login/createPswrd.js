$( document ).ready(function() {
    
    $('#confirmNewCreatePswrd').bind("cut copy paste", function (e) {
        e.preventDefault();
    });

 $('[data-toggle="tooltip"]').tooltip(); 
    

    $("input").focus(function() {
        $(".newPswrdErr").html("");
        $(".newPswrdErr").html("");
        $(".createPwdStrength").html("");
  

});

// function to show password

  $('#showCreatePswrd').click(function() {
    var newPswrd = document.getElementById("newCreatePswrd");
    validateShowPswrd(newPswrd);
  
  });


$("#newCreatePswrd").keyup(function(){

    var newPswrdVal = $("#newCreatePswrd").val();

     changeTooltipColor(newPswrdVal);
     validatePswrdStrength(newPswrdVal);
});

$("#newCreatePswrd").on('input',function(e){

    var newPswrdVal=$("#newCreatePswrd").val();
    if(!validatePassword(newPswrdVal)){
  
        $(".newPswrdErr").html("Invalid Password ");
    }else{
        $(".newPswrdErr").html(" ");
    }
 });







// Empty Fields Validation

    $("#signUpBtn").click(function () {
        //getting values from the form
        var emailMob = $("#mailSignUp").val();
        var password = $("#passwordSignUp").val();
        var cnfpassword = $("#cnfpasswordSignUp").val();
        
        var isEmailMobValid;  
        var isPasswordValid;
        if(!comparePassword(password,cnfpassword)){
            console.log("not equal");
            $(".equalCheck").html("Passwords do not match");
        }
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

        if(!validatePhone(emailMob)&&(!validateEmail(emailMob)))
        {
          
                $(".invalidEmailErr").html("Invalid Email/Phone number ");
        }
        
        if(!validatePassword(password)){
  
            $(".invalidPassErr").html("Invalid Password ");
    }

        $('#mailSignUp').val('');
        $('#passwordSignUp').val('');
        $('#cnfpasswordSignUp').val('');
       
    });
    

});


