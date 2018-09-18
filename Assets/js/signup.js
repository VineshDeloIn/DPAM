$( document ).ready(function() {
    $( ".pass-input ul li" ).css("list-style-type", "none");
    $('.cnfpasswordSignUp').bind("cut copy paste", function(e) {
        e.preventDefault();
       
        });

 $('[data-toggle="tooltip"]').tooltip(); 
 

    $("input").focus(function() {
        $(".signup-mail-err").html("");
        $(".signup-pswrd-err").html("");
        $(".signup-invalid-mail-err").html("");
        $(".signup-invalid-pswrd-err").html("");
        $(".signup-cnfpswrd-err").html("");

        $(".sign-up-pwd-strength").html("");

        var email = $(".mailSignUp").val();
      
  // check for email and mobile number text field
if(!validatePhone(email)&&(!validateEmail(email)))
{
  
        $(".signup-invalid-mail-err").html("Invalid Email/Phone number ");
}

});



// function to show password

  $('.sign-up-show-password').click(function() {
    passtoTextSignUp();
  
  });

 $(".mailSignUp").keyup(function(e){

  $(".signup-mail-err").html(" ");
  $(".signup-invalid-mail-err").html(" ");
});


$(".passwordSignUp").keyup(function(e){

    var passWord=$(".passwordSignUp").val();
    
     changeTooltipColor(passWord);
     checkPasswordStrength(passWord);
});

$(".passwordSignUp").on('input',function(e){
    var passWordChk=$(".passwordSignUp").val();
    if(!validatePassword(passWordChk)){
        $(".signup-invalid-pswrd-err").html("Invalid Password ");
    }else{
        $(".signup-invalid-pswrd-err").html(" ");
    }
 });


// Empty Fields Validation

$( ".signupForm" ).on('submit',function( event ) {
    
    // event.preventDefault();
        //getting values from the form
        var emailMob = $(".mailSignUp").val();
        var password = $(".passwordSignUp").val();
        var cnfpassword = $(".cnfpasswordSignUp").val();
        
        if(!comparePassword(password,cnfpassword)){
            
            $(".signup-unequal-pswrd-err").html("Passwords do not match");
            isPasswordValid = false;
        }
        //Checking if email/mob is not empty
        if(emailMob == "") {
            $(".signup-mail-err").html("Email/Mobile Number Cannot Be Empty!");
            $('.mailSignUp').val('');
            isEmailMobValid = false;
        } else  {
            isEmailMobValid = true;
        }

        //Checking if password is not empty
        if(password == "") {
            $(".signup-pswrd-err").html("Password Cannot Be Empty!");
            isPasswordValid = false;
        } else {
            isPasswordValid = true;
        }

        if(!validatePhone(emailMob)&&(!validateEmail(emailMob)))
        {
          
                $(".signup-invalid-mail-err").html("Invalid Email/Phone number ");
                isEmailMobValid = false;
        }
        
        if(!validatePassword(password)){
  
            $(".signup-invalid-pswrd-err").html("Invalid Password ");
            isPasswordValid = false;
     }
     if(cnfpassword==""){
      
            $(".signup-cnfpswrd-err").html("Invalid Password");
            isPasswordValid = false;
     }
    
     if(isEmailMobValid && isPasswordValid) {
        $(".signupForm").submit();
     } 
    event.preventDefault();
   
       
    });
    

});


