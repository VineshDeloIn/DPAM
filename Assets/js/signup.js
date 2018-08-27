$( document ).ready(function() {
    
    $("input").focus(function() {
        $(".mailErr").html("");
        $(".pswdErr").html("");
        $(".invalidEmailErr").html("");
        $(".invalidPassErr").html("");
        $(".pwdStrengthSignUp").html("");

        var email = $("#mail").val();
      
   
if(!validatePhone(email)&&(!validateEmail(email)))
{
  
        $(".invalidEmailErr").html("Invalid Email/Phone number ");
}

});

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



$('#showPassSignUp').click(function() {
    passtoTextSignUp();
  
  });
    

function passtoTextSignUp() {
    var x = document.getElementById("password");
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
}

function validatePhone(txtPhone) {
   
    var filter = /^((\+[1-9]{1,4}[ \-]*)|(\([0-9]{2,3}\)[ \-]*)|([0-9]{2,4})[ \-]*)*?[0-9]{3,4}?[ \-]*[0-9]{3,4}?$/;
    if (filter.test(txtPhone)) {
        if(txtPhone.length==10){
        return true;
      }
      return false;
    }
    
}

function validateEmail(email) {
    var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    return emailReg.test( email );
  }


  $("input").keyup(function(){
    var passWord=$("#password").val();

    if(!validatePassword(passWord))
{
  
        $(".invalidPassErr").html("Invalid Password ");
}

 checkPasswordStrength(passWord);
});

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

    $("#signUpBtn").click(function () {
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

$("#password").hover(function() {
    $(this).css('cursor','pointer').attr('title', 'titleThe password must have atleast one Capital letter,  atleast one number and atleast one special character');
});
/*
$("#password :hover").tooltip({
 
    // place tooltip on the right edge
    position: "center right",

    // a little tweaking of the position
    offset: [1, 10],

    // use the built-in fadeIn/fadeOut effect
    effect: "fade",

    // custom opacity setting
    opacity: 0.7

    });*/

