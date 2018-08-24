$( document ).ready(function() {
    
    $("input").focus(function() {
        $(".mailErr").html("");
        $(".pswdErr").html("");
        $(".invalidEmailErr").html("");
        $(".invalidPassErr").html("");

        var email = $("#mail").val();
      
   
if(!validatePhone(email)&&(!validateEmail(email)))
{
  
        $(".invalidEmailErr").html("Invalid Email/Phone number ");
}

});

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