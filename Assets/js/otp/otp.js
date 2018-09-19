$(document).ready(function(){
   
    $("input").focus(function() {
        $(".otp-err").html("");
    });

    var isOtpValid=false;
    $(".otpForm").on('submit',function( event ) {
        var emailMobOtp = $('.otpInputTxt').val();
        
        if(emailMobOtp == '') {
          $('.otp-err').html('Invalid OTP');
          isOtpValid = false;
        }
        if(emailMobOtp != '') {
            isOtpValid = true;
        }
        if (isOtpValid) {
            $(".otpForm").submit();
        }


      });
});