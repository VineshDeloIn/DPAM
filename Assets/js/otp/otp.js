$(document).ready(function(){
   
    $("input").focus(function() {
        $(".otp-err").html("");
    });

    var isOtpValid;
    $(".otpForm").on('submit',function( event ) {
        var emailMobOtp = $('.otpLabelTxt').val();
        // event.preventDefault();
        
        if(emailMobOtp == '') {
          $('.otp-err').html('Invalid OTP');
          //$('p.emailPhOtpErr').slideDown(5000);
          isOtpValid = false;
        }

        
      });
});