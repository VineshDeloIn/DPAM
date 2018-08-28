$( document ).ready(function() {
    

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

//phone validation for Dubai number

function validatePhone(txtPhone) {
   
    var filter = /^(?:\+971|00971|0)?(?:50|51|52|55|56|54|57)\d{7}$/;;
    if (filter.test(txtPhone)) {
        if(txtPhone.length<=12){
        return true;
      }
      return false;
    }
    
}
// email validation 

function validateEmail(email) {
    var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    return emailReg.test( email );
  }

// function to show password

  $('#showPassSignUp').click(function() {
    passtoTextSignUp();
  
  });

  function passtoTextSignUp() {
    var x = document.getElementById("passwordSignUp");
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
}

$("#passwordSignUp").keyup(function(){

    var passWord=$("#passwordSignUp").val();

    if(!validatePassword(passWord)){
  
        $(".invalidPassErr").html("Invalid Password ");
}
     checkPasswordStrength(passWord);
});

// function to check password strength
function checkPasswordStrength(pass){
  if(pass.length<=8){
    $(".pwdStrengthSignUp").html("Weak");
    $(".pwdStrengthSignUp").css("color", "red");
   
  }else if(pass.length>8 && pass.length<=12){
    $(".pwdStrengthSignUp").html("Medium");
    $(".pwdStrengthSignUp").css("color", "green");
   
  }else if(pass.length>12){
    $(".pwdStrengthSignUp").html("Strong");
    $(".pwdStrengthSignUp").css("color", "green");


  }
}
// function for password Validation


function validatePassword(inputValue){
    console.log(inputValue);
    var lowerCaseLetters = /[a-z]/g;
     // Validate capital letters
     var upperCaseLetters = /[A-Z]/g;
       // Validate numbers
    var numbers = /[0-9]/g;
   if(lowerCaseLetters.test(inputValue) &&
  upperCaseLetters.test(inputValue) &&
  numbers.test(inputValue) && inputValue.length >= 8 ) { 
          console.log("valid Password")
        return true;
   }else{
  return false;
 }   
}

// Empty Fields Validation

    $("#signUpBtn").click(function () {
        //getting values from the form
        var emailMob = $("#mailSignUp").val();
        var password = $("#passwordSignUp").val();

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

$("#password").hover(function() {
    $(this).css('cursor','pointer').attr('title', 'titleThe password must have atleast one Capital letter,  atleast one number and atleast one special character');
});
