function passtoTextSignUp() {
    var x = document.getElementById("passwordSignUp");
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
}

function validateShowPswrd(newPswrd) {
   
    if (newPswrd.type === "password") {
        newPswrd.type = "text";
    } else {
        newPswrd.type = "password";
    }
}

// function to check password strength
function validatePswrdStrength(pass){
    if(pass.length<=8){
      $(".createPwdStrength").html("Weak");
      $(".createPwdStrength").css("color", "red");
     
    }else if(pass.length>8 && pass.length<=12){
      $(".createPwdStrength").html("Medium");
      $(".createPwdStrength").css("color", "green");
     
    }else if(pass.length>12){
      $(".createPwdStrength").html("Strong");
      $(".createPwdStrength").css("color", "green");
  
  
    }
  }

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


var count=0;

function changeTooltipColor(inputValue,e){
    
    var lowerCaseLetters = /[a-z]/g;
    var specialChar = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
    var numbers = /[0-9]/g;
    var upperCaseLetters = /[A-Z]/g;
    var numPattern = /^\d+$/;
    var numChar=/^(?:[0-9]+[a-z]|[a-z]+[0-9])[a-z0-9]*$/i;
 

  var spanTick = $("<img  id='rightImg' src='./Assets/images/RightIcon.png'>");
  var spanRemove = $("<img  id='wrongImg' src='./Assets/images/WrongIcon.png'>");


   if(inputValue.length==1 && count==0){
    count++;
    $( "ul li" ).prepend(spanTick);
    $( "ul li" ).prepend(spanRemove);
   }
 
   
  if(inputValue.length<=0){
        
    $("ul li img#rightImg" ).hide();
    $( "ul li" ).css("color", "red");
  
    
}

if(lowerCaseLetters.test(inputValue) && specialChar.test(inputValue) && upperCaseLetters.test(inputValue) && numbers.test(inputValue) 
&& inputValue.length>=8 && inputValue.length<=20){
 
    $("ul li img#wrongImg" ).hide();
    $( "ul li" ).css("color", "green");
    $( "ul li  img#rightImg" ).show();
}

else{
    $( "ul li" ).css("color", "red");
    $("ul li img#wrongImg" ).show();
    $( "ul li img#rightImg" ).hide();
     
 if(specialChar.test(inputValue) &&  upperCaseLetters.test(inputValue)){
    $("ul li:nth-child(EVEN) img#wrongImg" ).hide();
    $( "ul li:nth-child(EVEN)" ).css("color", "green");
    $( "ul li:nth-child(EVEN) img#rightImg" ).show();
 }   
 
 if(lowerCaseLetters.test(inputValue) && specialChar.test(inputValue) && upperCaseLetters.test(inputValue) && numbers.test(inputValue) && inputValue.length<=7){
    $("ul li:nth-child(2) img#wrongImg" ).hide();
    $("ul li:nth-child(3) img#wrongImg" ).hide();
    $("ul li:nth-child(4) img#wrongImg" ).hide();
    $( "ul li:nth-child(2)" ).css("color", "green");
    $( "ul li:nth-child(3)" ).css("color", "green");
    $( "ul li:nth-child(4)" ).css("color", "green");
    $( "ul li:nth-child(2) img#rightImg" ).show();
    $( "ul li:nth-child(3) img#rightImg" ).show();
    $( "ul li:nth-child(4) img#rightImg" ).show();
 }
 if( numbers.test(inputValue) &&  inputValue.length>=8 ){
 
    $("ul li:nth-child(odd) img#wrongImg" ).hide();
       $( "ul li:nth-child(odd)" ).css("color", "green");
       $( "ul li:nth-child(odd) img#rightImg" ).show();
  
   }

   if( numChar.test(inputValue) &&  inputValue.length>=8 ){
 
    $("ul li:nth-child(odd) img#wrongImg" ).hide();
       $( "ul li:nth-child(odd)" ).css("color", "green");
       $( "ul li:nth-child(odd) img#rightImg" ).show();
  
   }


if(lowerCaseLetters.test(inputValue) && inputValue.length>=8 && inputValue.length<=20 ){
 
    $("ul li:nth-child(1) img#wrongImg" ).hide();
       $( "ul li:nth-child(1)" ).css("color", "green");
       $( "ul li:nth-child(1) img#rightImg" ).show();
  
   }
    if(specialChar.test(inputValue)){
      
       $( "ul li:nth-child(4) img#wrongImg" ).hide();
       $( "ul li:nth-child(4)" ).css("color", "green");
       $( "ul li:nth-child(4) img#rightImg" ).show();
       
  }
   if( upperCaseLetters.test(inputValue)){
       
       $( "ul li:nth-child(2) img#wrongImg" ).hide();
       $( "ul li:nth-child(2)" ).css("color", "green");
       $( "ul li:nth-child(2) img#rightImg" ).show();
       
       
   }
  
    if(numbers.test(inputValue) ) { 
  
   $( "ul li:nth-child(3) img#wrongImg" ).hide();
   $( "ul li:nth-child(3)" ).css("color", "green");
   $( "ul li:nth-child(3) img#rightImg" ).show();
  }

  if(numPattern.test(inputValue) ) { 
  
    $( "ul li:nth-child(3) img#wrongImg" ).hide();
    $( "ul li:nth-child(3)" ).css("color", "green");
    $( "ul li:nth-child(3) img#rightImg" ).show();
   }
  
   if(numChar.test(inputValue) ){
 
    $("ul li:nth-child(3) img#wrongImg" ).hide();
       $( "ul li:nth-child(3)" ).css("color", "green");
       $( "ul li:nth-child(3) img#rightImg" ).show();
  
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
