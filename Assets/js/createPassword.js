$( document ).ready(function() {
  
    $('.confirm-password-create').bind("cut copy paste", function(e) {
        // e.preventDefault();
       
        });
  $("input").focus(function() {

    $(".create-unequal-pswrd-err").html(" ");
    $(".create-pswrd-err").html(" ");
    $(".create-invalid-pswrd-err").html(" ");
    $(".create-cnfpswrd-err").html(" ");

 });

  $('.create-show-password').click(function() {
    passtoTextCreate();
  
  });


$(".password-create").keyup(function(e){

    var passWord=$(".password-create").val();
    
    checkPasswordStrengthCreate(passWord);
});

$(".confirm-password-create").keyup(function(e){

    var passWord=$(".password-create").val();
    
    checkPasswordStrengthCreate(passWord);
});





$( ".create-password-form" ).on('submit',function( event ) {
    
    
        var passwordCreate = $(".password-create").val();
        var cnfpasswordCreate = $(".confirm-password-create").val();
        
        if(!comparePassword(passwordCreate,cnfpasswordCreate)){
            
            $(".create-unequal-pswrd-err").html("Passwords do not match");
            isPasswordValid = false;
        }
       

        //Checking if password is not empty
        if(passwordCreate == "") {
            $(".create-pswrd-err").html("Password Cannot Be Empty!");
            isPasswordValid = false;
        } else {
            isPasswordValid = true;
        }

       
        
        if(!validatePassword(passwordCreate)){
  
            $(".create-invalid-pswrd-err").html("Invalid Password ");
            isPasswordValid = false;
     }
     if(cnfpasswordCreate==""){
      
            $(".create-cnfpswrd-err").html("Invalid Password");
            isPasswordValid = false;
     }
    
     if(isPasswordValid) {
        $(".create-password-form").submit();
     } 
    // event.preventDefault();
   
       
    });
    

});


