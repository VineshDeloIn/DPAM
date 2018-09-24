$(document).ready(function () {
    
    $(document).on('scroll', function () {
        if ($(this).scrollTop() > 1) {
            $('.profile-header').addClass('headerNavOnScroll');
        } else {
            $('.profile-header').removeClass('headerNavOnScroll');
        }
    });

    var isContactMobileChange = false;
    var isContactEmailChange = false;
    var isOtherContactChange = false;

    $('.profile-edit-btn').click(function (e) {
        e.preventDefault();
     //   alert("here");
       
        $(".profile-contact-cancel").css("display","inline-block");
        $('.profile-contact-save').css("display","inline-block");
        // $('.profile-contact-cancel').show();
        // $('.profile-contact-save').show();
        $('.profile-contact-edit').hide();
        $(".profile-contact-details-form input").removeAttr("readonly");
        $(".profile-contact-details-form input").css("border-bottom", "1px solid black");
    });

    $("input[name='profile-contact-mobile']").keyup(function () {
       // alert("mobile changed.");
        $("input[name='profile-contact-email']").attr('readonly', true);
        $("input[name='profile-contact-email']").css("border-bottom", "none");
        $("input[name='profile-contact-other']").attr('readonly', true);
        $("input[name='profile-contact-other']").css("border-bottom", "none");
        isContactMobileChange = true;
    });

    $("input[name='profile-contact-email']").keyup(function () {
     //  alert("emil changed.");
        $("input[name='profile-contact-mobile']").attr('readonly', true);
        $("input[name='profile-contact-mobile']").css("border-bottom", "none");
        $("input[name='profile-contact-other']").attr('readonly', true);
        $("input[name='profile-contact-other']").css("border-bottom", "none");
        isContactEmailChange = true;
    });

    $("input[name='profile-contact-other']").keyup(function () {
    //    alert("other changed.");
        $("input[name='profile-contact-mobile']").attr('readonly', true);
        $("input[name='profile-contact-mobile']").css("border-bottom", "none");
        $("input[name='profile-contact-email']").attr('readonly', true);
        $("input[name='profile-contact-email']").css("border-bottom", "none");
        isOtherContactChange = true;
    });

    
    $('.profile-cancel-btn').click(function (e) {
        e.preventDefault();
        $("input[name='profile-contact-mobile']").attr('readonly', true);
        $("input[name='profile-contact-mobile']").css("border-bottom", "none");
        $("input[name='profile-contact-email']").attr('readonly', true);
        $("input[name='profile-contact-email']").css("border-bottom", "none");
        $("input[name='profile-contact-other']").attr('readonly', true);
        $("input[name='profile-contact-other']").css("border-bottom", "none");
        $(".profile-contact-mail-err").html("");
        $(".profile-contact-mob-err").html("");
        $('.profile-contact-edit').show();
        $('.profile-contact-cancel').hide();
        $('.profile-contact-save').hide();
    });
    $('.profile-save-btn').click(function (e) {
        e.preventDefault();
        
       //  alert("here save");
        var profileContactMobile = $(".profile-contact-mob").val();
        var profileContactEmail = $(".profile-contact-mail").val();
        // alert(profileContactMobile);
        isMobileValid = validatePhone(profileContactMobile);
        // alert(isMobileValid);
        isEmailValid = validateEmail(profileContactEmail);

        if (isContactEmailChange) {
         //   alert("here email change");
            if (isEmailValid) {
                // alert("saved email");
                $('.emailVerPopupModel').modal('show'); 
                 
            }else {
                $(".profile-contact-mail-err").html("Invalid Email");
            }
        } else if (isContactMobileChange) {
            // alert("here mobile change");
            //  alert(isMobileValid);
            if (isMobileValid) {
            //    alert("saved mobile");
               $('.otpModel').modal('show'); 
            }else {
                $(".profile-contact-mob-err").html("Invalid Mobile Number");
            }
        }else if (isOtherContactChange) {
            $('.confirmChangesModel').modal('show'); 
        }


    });



    $('.profile-dpndnt-family-add-btn').click(function (e) {
      //  alert("family add");
        var profileFamilyDynamicTxt = '<form class="profileFamilyForm" action="" novalidate> ' +
            '  <div class="row dynamic-profile-div"> ' +
            ' <div class="col-lg-2 profile-input"> ' +
            ' <input type="text" class="" name="" required>' +
            ' <label class="">Name</label>' +
            ' </div> ' +
            ' <div class="col-lg-1"></div> ' +
            ' <div class="col-lg-2 profile-input"> ' +
            '  <input type="text" class="" name="" required> ' +
            '  <label class="">Relationship</label>' +
            ' </div> ' +
            ' <div class="col-lg-1"></div> ' +
            ' <div class="col-lg-2 profile-input"> ' +
            '  <input type="text" class="" name="" required> ' +
            '  <label class="">Email Id</label> ' +
            ' </div> ' +
            ' <div class="col-lg-1"></div> ' +
            ' <div class="col-lg-2 profile-input"> ' +
            '   <input type="text" class="" name="" required>  ' +
            '   <label class="">Mobile</label>  ' +
            ' </div> ' +
            ' <div class="col-lg-1 profile-delete remove-profile-family"><img  src="Assets/images/deleteIcon.svg" alt=""></div> ' +
            // '<span class="remove-profile-family" ><img  src="Assets/images/deleteIcon.svg" alt=""></span>'
        '</div> '
        '</form> ';


        $(".profile-family-dynamic-div").append(profileFamilyDynamicTxt);


    });

    $('.profile-family-dynamic-div').on('click', '.remove-profile-family', function () {
        $(this).parent().remove();
    });


    $('.profile-dpndnt-houseHelp-add-btn').click(function (e) {
        //alert("house help add");
        var houseHelpDynamicTxt = '<form class="houseHelpForm" action="" novalidate> ' +
            '  <div class="row dynamic-profile-div"> ' +
            ' <div class="col-lg-2 profile-input"> ' +
            ' <input type="text" class="" name="" required>' +
            ' <label class="">Name</label>' +

            ' </div> ' +
            ' <div class="col-lg-2"></div> ' +
            ' <div class="col-lg-2 profile-input"> ' +
            '  <input type="text" class="" name="" required> ' +
            '  <label class="">Contact Number</label>' +
            ' </div> ' +
            ' <div class="col-lg-5"></div> ' +
            ' <div class="col-lg-1 profile-delete remove-profile-houseHelp"><img  src="Assets/images/deleteIcon.svg" alt=""></div> ' +
            // '<span class="remove-profile-houseHelp" ><img  src="Assets/images/deleteIcon.svg" alt=""></span>'
        '</div> '
        '</form> ';


        $(".profile-house-help-dynamic-div").append(houseHelpDynamicTxt);


    });

    $('.profile-house-help-dynamic-div').on('click', '.remove-profile-houseHelp', function () {
        $(this).parent().remove();
    });


    $('.profile-dpndnt-pet-add-btn').click(function (e) {
        //alert("pet add");
        var addPetDynamicTxt = '<form class="profilePetForm" action="" novalidate> ' +
            '  <div class="row dynamic-profile-div"> ' +
            ' <div class="col-lg-2 profile-input"> ' +
            ' <input type="text" class="" name="" required>' +
            ' <label class="">Name</label>' +
            ' </div> ' +
            ' <div class="col-lg-2"></div> ' +
            ' <div class="col-lg-2 profile-input"> ' +
            '  <input type="text" class="" name="" required> ' +
            '  <label class="">Type</label>' +
            ' </div> ' +
            ' <div class="col-lg-2"></div> ' +
            ' <div class="col-lg-2 profile-input"> ' +
            '  <input type="text" class="" name="" required> ' +
            '  <label class="">Breed</label>' +
            ' </div> ' +
            ' <div class="col-lg-1"></div> ' +
            ' <div class="col-lg-1 profile-delete remove-profile-pet"><img  src="Assets/images/deleteIcon.svg" alt=""></div> ' +
            // '<span class="remove-profile-houseHelp" ><img  src="Assets/images/deleteIcon.svg" alt=""></span>'
        '</div> '
        '</form> ';


        $(".profile-pet-dynamic-div").append(addPetDynamicTxt);


    });



    $('.profile-pet-dynamic-div').on('click', '.remove-profile-pet', function () {
        $(this).parent().remove();
    });

    $(".uploadOption img").click(function() {
        // alert("upload pic");
        $(".uploadProfilePicFile").click();

        $('.uploadProfilePicFile').bind('change', function(event) {
            // alert("change happened");
            event.preventDefault();
            var profilePicPath = URL.createObjectURL(event.target.files[0]);
            // var v = $('.uploadProfilePicFile').val();
            // alert("change happened" + v);
           

            var ext = $('.uploadProfilePicFile').val().split('.').pop().toLowerCase();
            if ($.inArray(ext, ['bmp','png','jpeg']) == -1){
                //alert("iage of not right format");
                $(".uploadProfileErr").html(" !Image is not of format bmp , png pr jpeg. Please use any of that");
                }else{
                var picsize = (this.files[0].size);
                if (picsize > 5000000){
              // alert("File is not of proper size");
               $(".uploadProfileErr").html(" !Image size is more that 5MB");
                }else {
                    $('.profile-pic').attr('src', profilePicPath);
                }
                
            }
            

        });
    });

    $(".removeOption img").click(function() {
        $('.profile-pic').attr('src', "");
    });

    $(".cancelOtpEntPopup").click(function() {
        $('.otpModel').modal('hide'); 
    });

    $(".submitOtpEntPopUp").click(function(event) {
        event.preventDefault();
        $('.otpModel').modal('hide'); 
        $('.otpConfirmModel').modal('show'); 
    });

    $(".cancelOtpCfmPopup").click(function() {
        $('.otpConfirmModel').modal('hide'); 
    });

    $(".saveOtpCfmPopup").click(function(event) {
        event.preventDefault();
        $('.otpConfirmModel').modal('hide'); 
        $('.successPopupModel').modal('show'); 
    });


    $(".okSuccessPopup").click(function(event) {
        event.preventDefault();
        $('.successPopupModel').modal('hide'); 
    });

    $(".okEmailVerPopup").click(function(event) {
        event.preventDefault();
        $('.emailVerPopupModel').modal('hide'); 
    });

    $(".cancelCfmPopUp").click(function(event) {
        event.preventDefault();
        $('.confirmChangesModel').modal('hide'); 
    });
     

    $(".saveChgCfmPopUp").click(function(event) {
        event.preventDefault();
         
        $('.confirmChangesModel').modal('hide'); 
        $('.successfulUpdateModel').modal('show'); 
    });

    
     

     
     

    
    


});

