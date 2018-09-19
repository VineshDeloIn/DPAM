$( document ).ready(function() {
  
    $('.reset-confirm-password').bind("cut copy paste", function(e) {
        e.preventDefault();
       
        });

        $("input").focus(function() {

            $(".reset-unequal-password-error").html(" ");
            $(".reset-old-password-error").html(" ");
            $(".reset-confirm-password-error").html(" ");
            $(".reset-invalid-password-error").html(" ");
            $(".reset-password-error").html(" ");
        
         });
    
  $('.reset-show-password').click(function() {
    passtoTextReset();
  
  });


$(".reset-new-password").keyup(function(e){

    var passWord=$(".reset-new-password").val();
    
    checkPasswordStrengthReset(passWord);
});

$(".reset-confirm-password").keyup(function(e){

    var passWord=$(".reset-new-password").val();
    
    checkPasswordStrengthReset(passWord);
});





$( ".reset-password-form" ).on('submit',function( event ) {
    
    var oldpasswordCreate = $(".reset-old-password").val();
        var passwordCreate = $(".reset-new-password").val();
        var cnfpasswordCreate = $(".reset-confirm-password").val();
        
        if(!comparePassword(passwordCreate,cnfpasswordCreate)){
            
            $(".reset-unequal-password-error").html("Passwords do not match");
            isPasswordValid = false;
        }
        if(oldpasswordCreate == "") {
            $(".reset-old-password-error").html("Password Cannot Be Empty!");
            isPasswordValid = false;
        } else {
            isPasswordValid = true;
        }

        //Checking if password is not empty
        if(passwordCreate == "") {
            $(".reset-password-error").html("Password Cannot Be Empty!");
            isPasswordValid = false;
        } else {
            isPasswordValid = true;
        }

       
        
        if(!validatePassword(passwordCreate)){
  
            $(".reset-invalid-password-error").html("Invalid Password ");
            isPasswordValid = false;
     }
     if(cnfpasswordCreate==""){
      
            $(".reset-confirm-password-error").html("Invalid Password");
            isPasswordValid = false;
     }
    
     if(isPasswordValid) {
        $(".reset-password-form").submit();
     } 
    event.preventDefault();
   
       
    });
    

});


