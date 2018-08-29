$( document ).ready(function() {
    
    $('#confirmNewCreatePswrd').bind("cut copy paste", function (e) {
        e.preventDefault();
    });

 $('[data-toggle="tooltip"]').tooltip(); 
    

    $("input").focus(function() {
        $(".newPswrdErr").html("");
        $(".newPswrdErr").html("");
        $(".createPwdStrength").html("");
  

});

// function to show password

  $('#showCreatePswrd').click(function() {
    var newPswrd = document.getElementById("newCreatePswrd");
    validateShowPswrd(newPswrd);
  
  });


$("#newCreatePswrd").keyup(function(){

    var newPswrdVal = $("#newCreatePswrd").val();

     changeTooltipColor(newPswrdVal);
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


    

});


