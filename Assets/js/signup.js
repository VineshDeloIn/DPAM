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
    var specialChar = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
     // Validate capital letters
     var upperCaseLetters = /[A-Z]/g;
       // Validate numbers
    var numbers = /[0-9]/g;
   if(lowerCaseLetters.test(inputValue) &&
  upperCaseLetters.test(inputValue) &&
  numbers.test(inputValue) && specialChar.test(inputValue) && inputValue.length >= 8 ) { 
         
        return true;
   }else{
  return false;
 }   
}


// function for password tooltip Color Change


function changeTooltipColor(inputValue){
    
    var lowerCaseLetters = /[a-z]/g;
    var specialChar = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
    var numbers = /[0-9]/g;
    var upperCaseLetters = /[A-Z]/g;

   var spanTick = $("<span>&#10004;</span>");
   var spanRemove = $("<span>&#10006;</span>");
   
  
 
   // later, when your loading is done:
  
    if(inputValue.length<=0){
        
        $("ul li span" ).remove();
        $( "ul li" ).prepend(spanRemove);
        $( "ul li" ).css("color", "red");
      
        
    }
    if(lowerCaseLetters.test(inputValue) && specialChar.test(inputValue) && upperCaseLetters.test(inputValue) && numbers.test(inputValue) 
    && inputValue.length>=8 && inputValue.length<=20){
     
        $("ul li span" ).remove();
        $( "ul li" ).css("color", "green");
        $( "ul li" ).prepend(spanTick);
    }else{
        $( "ul li" ).css("color", "red");
        $("ul li span" ).remove();
        $( "ul li" ).prepend(spanRemove);
    if(lowerCaseLetters.test(inputValue) && inputValue.length>=8 && inputValue.length<=20 ){
       
        
         $("ul li:nth-child(1) span" ).remove();
           $( "ul li:nth-child(1)" ).css("color", "green");
           $( "ul li:nth-child(1)" ).prepend(spanTick);
      
       }
        if(specialChar.test(inputValue)){
          
           $( "ul li:nth-child(4) span" ).remove();
           $( "ul li:nth-child(4)" ).css("color", "green");
           $( "ul li:nth-child(4)" ).prepend(spanTick);
      }
       if(upperCaseLetters.test(inputValue)){
           
           $( "ul li:nth-child(2) span" ).remove();
           $( "ul li:nth-child(2)" ).css("color", "green");
           $( "ul li:nth-child(2)" ).prepend(spanTick);
           
       }
        if(numbers.test(inputValue) ) { 
      
       $( "ul li:nth-child(3) span" ).remove();
       $( "ul li:nth-child(3)" ).css("color", "green");
       $( "ul li:nth-child(3)" ).prepend(spanTick);
       
      }
    }
   

}

//function to check password equality

function comparePassword(pass1,pass2){

    if(pass1===pass2){
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


