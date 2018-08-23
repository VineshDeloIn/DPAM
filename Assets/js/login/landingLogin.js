$( document ).ready(function() {
    
var username = $("#mail").val();
var password = $("#password").val();



    $("#loginBtn").click(function () {
        var username = $("#mail").val();
        var password = $("#password").val();

        var isUserNameValid;
        var isPasswordValid;
        
        if ($('#remeberMeCbx').is(':checked') && isUserNameValid && isPasswordValid) {
            // save username and password
            localStorage.userName =$("#mail").val().val();
            localStorage.password = $("#password").val();
            localStorage.checkBoxValidation = $('#remeberMeCbx').val();
        } else {
            localStorage.userName = '';
            localStorage.password = '';
            localStorage.checkBoxValidation = '';
        }
    });

    

});