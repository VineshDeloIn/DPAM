$(document).ready(function(){
   
    $("input").focus(function() {
        $(".emailPhOtpErr").html("");
    });

    var isOtpValid;
    $( "#OtpForm" ).on('submit',function( event ) {
        var emailMobOtp = $('#otpNumber').val();
        event.preventDefault();
        
        if(emailMobOtp == '') {
          $('.emailPhOtpErr').html('Invalid OTP');
          //$('p.emailPhOtpErr').slideDown(5000);
          isOtpValid = false;
        }
      });
});