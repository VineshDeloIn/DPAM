$(document).ready(function()
{
 $('.profile-edit-btn').click(function(e)
 {
    e.preventDefault();
     alert("here");
     $(".profile-contact-cancel").show();
     $('.profile-contact-save').show();
     $('.profile-contact-edit').hide();
    $("input[name='profile-contact-fields']").removeAttr("readonly");  
    $("input[name='profile-contact-fields']").css("border-bottom", "1px solid black");
 });

 $('.profile-dpndnt-family-add-btn').click(function(e){
     alert("family add");
     var profileFamilyDynamicTxt = '<form class="profileFamilyForm" action="" novalidate> ' +
     ' <div class="container mt-3 mb-3"> <div class="row profile-family-div"> ' +
     ' <div class="col-lg-3"> ' +
     ' <p class="mb-0 profile-details-fields">Name</p> ' +
     ' <input type="text" class="profile-details-fields-value" name="profile-lease-fields" value="" /> ' +

     ' </div> ' +
     ' <div class="col-lg-3"> ' +
     '  <p class="mb-0 profile-details-fields">Relationship</p> ' +
     '  <input type="text" class="profile-details-fields-value" name="profile-lease-fields" value="" /> ' +
     ' </div> ' +
     ' <div class="col-lg-3"> ' +
     '  <p class="mb-0 profile-details-fields">Mail Id</p> ' +
     '   <input type="text" class="profile-details-fields-value" name="profile-lease-fields" value="" /> ' +
     ' </div> ' +
     ' <div class="col-lg-2"> ' +
     '    <p class="mb-0 profile-details-fields">Mobile</p> ' +
     '    <input type="text" class="profile-details-fields-value" name="profile-lease-fields" value="" />  ' +
     ' </div> ' +
     '<span class="remove-profile-family"><img  src="Assets/images/deleteIcon.svg" alt=""></span>'
     '</div>'
     '</div> '
     '</form> ';
     
     var val = $('.profile-family-dynamic-div:last').before(
        profileFamilyDynamicTxt
        );

       

 });
 
 $('.profile-family-group').on('click','.remove-profile-family',function() {
    $(this).parent().remove();
});

 });