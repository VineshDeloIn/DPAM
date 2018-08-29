$( document ).ready(function() {
    
    $('#cnfpasswordSignUp').bind("cut copy paste", function(e) {
        e.preventDefault();
       
        });

 $('[data-toggle="tooltip"]').tooltip(); 
    

    $("input").focus(function() {
        $(".mailErr").html("");
        $(".pswdErr").html("");
        $(".invalidEmailErr").html("");
        $(".invalidPassErr").html("");
        $(".pwdStrengthSignUp").html("");

        var email = $("#mailSignUp").val();
      
  // check for email and mobile number text field
if(!validatePhone(email)&&(!validateEmail(email)))
{
  
        $(".invalidEmailErr").html("Invalid Email/Phone number ");
}

});



// function to show password

  $('#showPassSignUp').click(function() {
    passtoTextSignUp();
  
  });


$("#passwordSignUp").keyup(function(){

    var passWord=$("#passwordSignUp").val();

     changeTooltipColor(passWord);
     checkPasswordStrength(passWord);
});

$("#passwordSignUp").on('input',function(e){
    var passWordChk=$("#passwordSignUp").val();
    if(!validatePassword(passWordChk)){
  
        $(".invalidPassErr").html("Invalid Password ");
    }else{
        $(".invalidPassErr").html(" ");
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
            $('#mailSignUp').val('');
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

    if(!validatePassword(cnfpassword)){
  
        $(".cnfPswdErr").html("Invalid Password ");
     }

       
        $('#passwordSignUp').val('');
        $('#cnfpasswordSignUp').val('');
       
    });
    

});


