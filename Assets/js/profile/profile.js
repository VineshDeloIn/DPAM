
$(document).ready(function () {
    var defaultProfilePetObj = {};
    defaultProfilePetObj["petName"] = "";
    defaultProfilePetObj["petType"] = "";
    defaultProfilePetObj["petBreed"] = "";

    var defaultProfileFamilyObj = {};
    defaultProfileFamilyObj["dependntName"] = "";
    defaultProfileFamilyObj["dependntRel"] = "";
    defaultProfileFamilyObj["dependntEmail"] = "";
    defaultProfileFamilyObj["dependntMob"] = "";

    var defaultProfileHouseHelpObj = {};
    defaultProfileHouseHelpObj["houseHelpName"] = "";
    defaultProfileHouseHelpObj["houseHelpContact"] = "";


    var profilePetJson = [];
    profilePetJson.push(defaultProfilePetObj);

    var profileFamilyJson = [];
    profileFamilyJson.push(defaultProfileFamilyObj);

    var profileHouseHelpJson = [];
    profileHouseHelpJson.push(defaultProfileHouseHelpObj);
  
    var dynamicPetCount = 0;
    var dynamicFamilyCount = 0;
    var dynamicHouseHelpCount = 0;

//get the data for the dynamic profile dependent pet details
    $.ajax({
        type: 'GET',
        url: '',
        dataType: 'json',
        success: function (data) {

            var petJson = $.parseJSON(data);
 
            $.each(petJson, function (index, petJsonObj) {
                dynamicPetCount++;
                dynamicPetDetailsFxn(petJsonObj, dynamicPetCount);

            })
        }

    });

    //get the data for the dynamic profile dependent family details
    $.ajax({
        type: 'GET',
        url: '',
        dataType: 'json',
        success: function (data) {

            var familyJson = $.parseJSON(data);
 
            $.each(familyJson, function (index, familyJsonObj) {
                dynamicFamilyCount++;
                dynamicFamilyDetailsFxn(familyJsonObj, dynamicFamilyCount);

            })
        }

    });

    var getProfilePic = function () {
        $.ajax({
            url: 'ProfilePicture/getImage',
            type: "GET",
            data: { tCode: sessionStorage.getItem("tCode") },
            contentType: false,
            success: function (getByteArray, status) {
                $('.profile-pic').attr('src', 'data:image/png;base64,${getByteArray}');
            },
            error: function (error) {
                $('.profile-pic').attr('src', "Assets/images/profile_pic_place_holder.png");
                $('.profile-pic').attr("alt", "pathError");
                // console.log('Failed');
                // console.log(error);
            }
        });
    }

    getProfilePic();
        //get the data for the dynamic profile dependent house help details
        $.ajax({
            type: 'GET',
            url: '',
            dataType: 'json',
            success: function (data) {
    
                var houseHelpJson = $.parseJSON(data);
     
                $.each(houseHelpJson, function (index, houseHelpJsonObj) {
                    dynamicHouseHelpCount++;
                    dynamicHouseHelpDetailsFxn(houseHelpJsonObj, dynamicHouseHelpCount);
    
                })
            }
    
        });

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
        dynamicFamilyCount++;
        
        $.each(profileFamilyJson, function (index, profileFamilyObj) {
            dynamicFamilyDetailsFxn(profileFamilyObj, dynamicFamilyCount);

        })
        
        
    });

    $('.profile-family-dynamic-div').on('click', '.remove-profile-family', function () {
        $(this).parent().remove();
    });


    $('.profile-dpndnt-houseHelp-add-btn').click(function (e) {

        dynamicHouseHelpCount++;
        
        $.each(profileHouseHelpJson, function (index, profileHouseHelpObj) {
            dynamicHouseHelpDetailsFxn(profileHouseHelpObj, dynamicHouseHelpCount);

        })
       
    });

    $('.profile-house-help-dynamic-div').on('click', '.remove-profile-houseHelp', function () {
        $(this).parent().remove();
    });



    $('.profile-dpndnt-pet-add-btn').click(function (e) {
        //alert("pet add");
        dynamicPetCount++;
        
        $.each(profilePetJson, function (index, profilePetObj) {
            dynamicPetDetailsFxn(profilePetObj, dynamicPetCount);

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


    var removeProfilepic = function () {
        $.ajax({
            url: 'ProfilePicture/removeImage',
            type: "DELETE",
            data: { tCode: sessionStorage.getItem("tCode") },
            contentType: false,
            success: function (file, status) {
                $('.profile-pic').attr('src', "Assets/images/profile_pic_place_holder.png");
            },
            error: function (error) {
                $('.profile-pic').attr("alt", "unableToUpdate");
            }
        });
    }

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

            var objUpload;

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

                    objUpload = {
                        tCode: sessionStorage.getItem("tCode"),
                        uploadImg: fileByteArray
                    };
                }

                $.ajax({
                    url: "ProfilePicture/updateImage",
                    type: "PUT",
                    contentType: "application/json",
                    data: objUpload,
                    processData: false,
                    success: function (data, status) { console.log('upload Successful!'); },
                    error: function (xhr, status, error) { console.log('upload Failure!'); }
                });
            }
        });
    });

    $(".removeOption img").click(function () {
        removeProfilepic();
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
         //alert("in dependent save");
        var petJson = [];
        // alert(dynamicPetCount);
        // iterate and push into the petJson to be save
        for (var i = 1; i <= dynamicPetCount; i++) {
             console.log("here"+i);
            var petObj = {};
            var petName = $('.profile-pet-name' + i).val();
            var petType = $('.profile-pet-type' + i).val();
            var petBreed = $('.profile-pet-breed' + i).val();
            petObj["petName"] = petName;
            petObj["petType"] = petType;
            petObj["petBreed"] = petBreed;
            petJson.push(petObj);

        }
            console.log(petJson);

             // alert("in dependent save");
        var dependentJson = [];
        // alert(dynamicFamilyCount);
        for (var i = 1; i <= dynamicFamilyCount; i++) {
          //  console.log("here"+i);
            var dependentObj = {};
            var dependentName = $('.profile-depndnt-name' + i).val();
            var dependentReln = $('.profile-depndnt-rel' + i).val();
            var dependentMail = $('.profile-depndnt-mail' + i).val();
            var dependentMob = $('.profile-depndnt-mob' + i).val();
            dependentObj["dependntName"] = dependentName;
            dependentObj["dependntRel"] = dependentReln;
            dependentObj["dependntEmail"] = dependentMail;
            dependentObj["dependntMOb"] = dependentMob;
            dependentJson.push(dependentObj);

        }
          
            console.log(dependentJson);

            var houseHelpJson = [];
            // alert(dynamicPetCount);
            // iterate and push into the petJson to be save
            for (var i = 1; i <= dynamicHouseHelpCount; i++) {
                // console.log("here"+i);
                // console.log(dynamicHouseHelpCount);
                var houseHelpObj = {};
                var houseHelpName = $('.profile-depndnt-houseHelp-name' + i).val();
                console.log(houseHelpName);
                var houseHelpContact = $('.profile-depndnt-houseHelp-contact' + i).val();
                houseHelpObj["houseHelpName"] = houseHelpName;
                houseHelpObj["houseHelpContact"] = houseHelpContact;
                houseHelpJson.push(houseHelpObj);
    
            }
                console.log("houseHelp"+houseHelpJson);
    

        $.ajax({
            type: 'POST',
            url: '',
            dataType: 'json',
            data: petJson,
            success: function (data) {
                alert("petsSaved");
            }

        });

        $.ajax({
            type: 'POST',
            url: '',
            dataType: 'json',
            data: petJson,
            success: function (data) {
                alert("dependentJson");
            }

        });

        $.ajax({
            type: 'POST',
            url: '',
            dataType: 'json',
            data: houseHelpJson,
            success: function (data) {
                alert("houseHelpSaved");
            }

        });

    });


});

function dynamicPetDetailsFxn(profilePetObj, dynamicPetCount) {
    var profilePetName = profilePetObj.petName;
    var profilePetType = profilePetObj.petType;
    var profilePetBreed = profilePetObj.petBreed;


    var addPetDynamicTxt = '<form class="profilePetForm' + dynamicPetCount + '" action="" novalidate> ' +
        '  <div class="row dynamic-profile-div"> ' +
        ' <div class="col-lg-2 profile-input"> ' +
        ' <input type="text" class="profile-pet-name' + dynamicPetCount + '" name=""  value="' + profilePetName + '" required>' +
        ' <label class="">Name</label>' +
        ' </div> ' +
        ' <div class="col-lg-2"></div> ' +
        ' <div class="col-lg-2 profile-input"> ' +
        '  <input type="text" class="profile-pet-type' + dynamicPetCount + '" name="" value="' + profilePetType + '"  required> ' +
        '  <label class="">Type</label>' +
        ' </div> ' +
        ' <div class="col-lg-2"></div> ' +
        ' <div class="col-lg-2 profile-input"> ' +
        '  <input type="text" class="profile-pet-breed' + dynamicPetCount + '" name=""  value="' + profilePetBreed + '"  required> ' +
        '  <label class="">Breed</label>' +
        ' </div> ' +
        ' <div class="col-lg-1"></div> ' +
        ' <div class="col-lg-1 profile-delete remove-profile-pet"><img  src="Assets/images/deleteIcon.svg" alt=""></div> ' +
        // '<span class="remove-profile-houseHelp" ><img  src="Assets/images/deleteIcon.svg" alt=""></span>'
        '</div> '
    '</form> ';

    $(".profile-pet-dynamic-div").append(addPetDynamicTxt);
}

function dynamicFamilyDetailsFxn(profileFamilyObj, dynamicFamilyCount) {
    var dependntName = profileFamilyObj.dependntName;
    var dependntRel = profileFamilyObj.dependntRel;
    var dependntEmail = profileFamilyObj.dependntEmail;
    var dependntMob = profileFamilyObj.dependntMob;

//  alert("family add");
var profileFamilyDynamicTxt = '<form class="profileFamilyForm' + dynamicFamilyCount + '" action="" novalidate> ' +
'  <div class="row dynamic-profile-div"> ' +
' <div class="col-lg-2 profile-input"> ' +
' <input type="text" class="profile-depndnt-name' + dynamicFamilyCount + '" name=""  value="' + dependntName + '"  required>' +
' <label class="">Name</label>' +
' </div> ' +
' <div class="col-lg-1"></div> ' +
' <div class="col-lg-2 profile-input"> ' +
'  <input type="text" class="profile-depndnt-rel' + dynamicFamilyCount + '" name=""  value="' + dependntRel + '" required> ' +
'  <label class="">Relationship</label>' +
' </div> ' +
' <div class="col-lg-1"></div> ' +
' <div class="col-lg-2 profile-input"> ' +
'  <input type="text" class="profile-depndnt-mail' + dynamicFamilyCount + '" name=""  value="' + dependntEmail + '" required> ' +
'  <label class="">Email Id</label> ' +
' </div> ' +
' <div class="col-lg-1"></div> ' +
' <div class="col-lg-2 profile-input"> ' +
'   <input type="text" class="profile-depndnt-mob' + dynamicFamilyCount + '" name=""  value="' + dependntMob + '" required>  ' +
'   <label class="">Mobile</label>  ' +
' </div> ' +
' <div class="col-lg-1 profile-delete remove-profile-family"><img  src="Assets/images/deleteIcon.svg" alt=""></div> ' +
// '<span class="remove-profile-family" ><img  src="Assets/images/deleteIcon.svg" alt=""></span>'
'</div> '
'</form> ';


$(".profile-family-dynamic-div").append(profileFamilyDynamicTxt);
}

function dynamicHouseHelpDetailsFxn(profileHouseHelpObj, dynamicHouseHelpCount) {
    var houseHelpName = profileHouseHelpObj.houseHelpName;
    var houseHelpContact = profileHouseHelpObj.houseHelpContact;

     //alert("house help add");
     var houseHelpDynamicTxt = '<form class="houseHelpForm' + dynamicHouseHelpCount + '" action="" novalidate> ' +
     '  <div class="row dynamic-profile-div"> ' +
     ' <div class="col-lg-2 profile-input"> ' +
     ' <input type="text" class="profile-depndnt-houseHelp-name' + dynamicHouseHelpCount + '" name=""  value="' + houseHelpName + '"   required>' +
     ' <label class="">Name</label>' +

     ' </div> ' +
     ' <div class="col-lg-2"></div> ' +
     ' <div class="col-lg-2 profile-input"> ' +
     '  <input type="text" class="profile-depndnt-houseHelp-contact' + dynamicHouseHelpCount + '" name=""   value="' + houseHelpContact + '"  required> ' +
     '  <label class="">Contact Number</label>' +
     ' </div> ' +
     ' <div class="col-lg-5"></div> ' +
     ' <div class="col-lg-1 profile-delete remove-profile-houseHelp"><img  src="Assets/images/deleteIcon.svg" alt=""></div> ' +
     // '<span class="remove-profile-houseHelp" ><img  src="Assets/images/deleteIcon.svg" alt=""></span>'
     '</div> '
 '</form> ';


 $(".profile-house-help-dynamic-div").append(houseHelpDynamicTxt);



}



