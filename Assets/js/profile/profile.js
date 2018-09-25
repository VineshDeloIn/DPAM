var arr = {};
arr["name"] = "";
arr["type"] = "";
arr["breed"] = "";

var dynArr = [];
dynArr.push(arr);
console.log(dynArr);

var petCount = 0;
var dynArr1 = {};


$(document).ready(function () {

    //getProfilePic();

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
    var inValid = false;


    var getProfilePic = function () {
        $.ajax({
            url: 'Action/Method',
            type: "GET",
            contentType: false,
            success: function (file, status) {
                $('.profile-pic').attr('src', 'data:image/png;base64,${YourByte}');                
            },
            error: function (error) {
                console.log(error);
                $('.profile-pic').attr("alt", "pathError");
            }
        });
    }

    $('.profile-edit-btn').click(function (e) {
        e.preventDefault();
        //   alert("here");

        $(".profile-contact-cancel").css("display", "inline-block");
        $('.profile-contact-save').css("display", "inline-block");
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
                $('.userEmailPopupPH').html(profileContactEmail);
                $('.emailVerPopupModel').modal('show');

            } else {
                inValid = true;
                $(".profile-contact-mail-err").html("Invalid Email");
            }
        } else if (isContactMobileChange) {
            // alert("here mobile change");
            //  alert(isMobileValid);
            if (isMobileValid) {
                //    alert("saved mobile");
                $('.otpModel').modal('show');
            } else {
                inValid = true;
                $(".profile-contact-mob-err").html("Invalid Mobile Number");
            }
        } else if (isOtherContactChange) {
            $('.confirmChangesModel').modal('show');
        }

        if (!inValid) {
            // $('.profile-contact-details-form').submit();
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
        petCount++;
        var nn = $(".profile-pet-name").val(); alert(nn);
        alert(dynArr.length);
        $.each(dynArr, function (index, item) {
            dynamicPetFxn(item);

        })


    });



    $('.profile-pet-dynamic-div').on('click', '.remove-profile-pet', function () {
        $(this).parent().remove();
    });

        // var uploadProfilepic = function (file) {
        //     $.ajax({
        //         url: 'Profile/Update',
        //         type: "PUT",
        //         contentType: false,
        //         success: function (file, status) {
        //             var getProfilePicPath
        //             $('.profile-pic').attr('src', getProfilePicPath);
        //         },
        //         error: function (error) {
        //             console.log(error);
        //             $('.profile-pic').attr("alt", "pathError");
        //         }
        //     });
        // }

    $(".uploadOption img").click(function () {
        // alert("upload pic");
        $(".uploadProfilePicFile").click();

        $('.uploadProfilePicFile').bind('change', function (event) {
            // alert("change happened");
            event.preventDefault();
            var profilePicPath = URL.createObjectURL(event.target.files[0]);
            // var v = $('.uploadProfilePicFile').val();
            // alert("change happened" + v);

            var isUploadValid = true;

            var ext = $('.uploadProfilePicFile').val().split('.').pop().toLowerCase();
            if ($.inArray(ext, ['bmp', 'png', 'jpeg']) == -1) {
                //alert("iage of not right format");
                $(".uploadProfileErr").html(" !Image is not of format bmp , png pr jpeg. Please use any of that");
                isUploadValid = false;
            }

            var picsize = (this.files[0].size);
            if (picsize > 5000000) {
                // alert("File is not of proper size");
                $(".uploadProfileErr").html(" !Image size is more that 5MB");
                isUploadValid = false;
            } else {
                isUploadValid = true;
                $('.profile-pic').attr('src', profilePicPath);
            }

            if (isUploadValid) {
                // var fr = new FileReader();
                var reader = new FileReader();
                var fileByteArray = [];
                reader.readAsArrayBuffer(this.files[0]);
                reader.onloadend = function (evt) {
                    if (evt.target.readyState == FileReader.DONE) {
                        var arrayBuffer = evt.target.result,
                            array = new Uint8Array(arrayBuffer);
                        for (var i = 0; i < array.length; i++) {
                            fileByteArray.push(array[i]);
                        }
                    }

                    var objUpload = {                        
                            tCode: $('.tCode').val(),
                            uploadImg: fileByteArray                        
                    };
                }

                $.ajax({
                    url: "Action/Method",
                    type: "PUT",
                    contentType: "application/json",
                    data: objUpload,
                    processData: false,
                    success: function (data,status) {  },
                    error: function (xhr, status, error) {  }
                });
            }
        });
    });

    $(".removeOption img").click(function () {
        $('.profile-pic').attr('src', "Assets/images/profile_pic_place_holder.png");
        //write a function to make a delete request
    });

    $(".cancelOtpEntPopup").click(function () {
        $('.popup-err-msg-otp').html("");
        // $('.otpModel').modal('hide'); 
    });

    $(".submitOtpEntPopUp").click(function (event) {
        event.preventDefault();
        var popUpInput = $(".model-otp-input").val();
        // alert(popUpInput);
        var otpRegex = /^\d{4}$/;
        if (otpRegex.test(popUpInput)) {
            // alert('enteringregex');
            $('.otpModel').modal('hide');
            $('.otpConfirmModel').modal('show');
            //commenting this to prevent the next popup from popping up
            // $('.modelOtpEntForm').submit();
        } else {
            $('.popup-err-msg-otp').html("Invalid OTP!");
        }

    });

    $(".cancelOtpCfmPopup").click(function () {
        $('.otpConfirmModel').modal('hide');
    });

    $(".saveOtpCfmPopup").click(function (event) {
        event.preventDefault();
        $('.otpConfirmModel').modal('hide');
        $('.successPopupModel').modal('show');
    });


    $(".okSuccessPopup").click(function (event) {
        event.preventDefault();
        $('.successPopupModel').modal('hide');
    });

    $(".okEmailVerPopup").click(function (event) {
        event.preventDefault();
        $('.emailVerPopupModel').modal('hide');
    });

    $(".cancelCfmPopUp").click(function (event) {
        event.preventDefault();
        $('.confirmChangesModel').modal('hide');
    });


    $(".saveChgCfmPopUp").click(function (event) {
        event.preventDefault();

        $('.confirmChangesModel').modal('hide');
        $('.successfulUpdateModel').modal('show');
    });

    $(".profile-dpndnt-save-btn").click(function (event) {
        alert("in dependent save");

        var js = [];
        var s = {};
        $.ajax({
            type: 'POST',
            url: '',
            dataType: 'json',
            data: '',
            success: function (data) {

                var familyJsonObj = $.parseJSON(data);

                dynArr = [];
                dynArr.push(familyJsonObj);
                $.each(dynArr, function (index, item) {
                    dynamicPetFxn(item);

                })
            }

        });

    });


});

function dynamicPetFxn(arr) {
    var name = arr.name;
    var type = arr.type;
    var breed = arr.breed;

    var addPetDynamicTxt = '<form class="profilePetForm" action="" novalidate> ' +
        '  <div class="row dynamic-profile-div"> ' +
        ' <div class="col-lg-2 profile-input"> ' +
        ' <input type="text" class="" name=""  value="' + name + '" required>' +
        ' <label class="profile-pet-name">Name</label>' +
        ' </div> ' +
        ' <div class="col-lg-2"></div> ' +
        ' <div class="col-lg-2 profile-input"> ' +
        '  <input type="text" class="" name="" value="' + type + '"  required> ' +
        '  <label class="profile-pet-type">Type</label>' +
        ' </div> ' +
        ' <div class="col-lg-2"></div> ' +
        ' <div class="col-lg-2 profile-input"> ' +
        '  <input type="text" class="" name=""  value="' + breed + '"  required> ' +
        '  <label class="profile-pet-breed">Breed</label>' +
        ' </div> ' +
        ' <div class="col-lg-1"></div> ' +
        ' <div class="col-lg-1 profile-delete remove-profile-pet"><img  src="Assets/images/deleteIcon.svg" alt=""></div> ' +
        // '<span class="remove-profile-houseHelp" ><img  src="Assets/images/deleteIcon.svg" alt=""></span>'
        '</div> '
    '</form> ';

    $(".profile-pet-dynamic-div").append(addPetDynamicTxt);
}

