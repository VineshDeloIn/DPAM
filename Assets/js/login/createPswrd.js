$( document ).ready(function() {
   // alert("here");
    $( ".createPswrdinfo ul li" ).css("list-style-type", "none");
    $('#confirmNewCreatePswrd').bind("cut copy paste", function (e) {
        e.preventDefault();
    });

 $('[data-toggle="tooltip"]').tooltip(); 
    

    $("input").focus(function() {
        $(".newPswrdErr").html("");
        $(".confirmNewPswrdErr").html("");
        $(".createPwdStrength").html("");
  

});

// function to show password

  $('#showCreatePswrd').click(function() {
    var newPswrd = document.getElementById("newCreatePswrd");
    validateShowPswrd(newPswrd);
  
  });


$("#newCreatePswrd").keyup(function(e){

    var newPswrdVal = $("#newCreatePswrd").val();

     changeTooltipColor(newPswrdVal,e);
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

$( "#createPswrdFormDiv" ).on('submit',function( event ) {
   
    event.preventDefault();
    var password = $("#newCreatePswrd").val();
    var cnfpassword = $("#confirmCreatedPswrd").val();
    
    
    var isPasswordValid;
    if(!comparePassword(password,cnfpassword)){
        console.log("not equal");
        $(".confirmNewPswrdErr").html("Passwords do not match");
    }
   

    //Checking if password is not empty
    if(password == "") {
        $(".newPswrdErr").html("Password Cannot Be Empty!");
        isPasswordValid = false;
    } else {
        isPasswordValid = true;
    }

    
    
    if(!validatePassword(password)){

        $(".newPswrdErr").html("Invalid Password ");
}

if(!validatePassword(cnfpassword)){

    $(".confirmNewPswrdErr").html("Invalid Password ");
 }

   
    $('#newCreatePswrd').val('');
    $('#confirmCreatedPswrd').val('');
   
});


});


