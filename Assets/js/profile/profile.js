$(document).ready(function()
{

    var isContactMobileChange = false;
    var isContactEmailChange = false;

    $('.profile-edit-btn').click(function(e)
    {
       e.preventDefault();
        alert("here");
        $(".profile-contact-cancel").show();
        $('.profile-contact-save').show();
        $('.profile-contact-edit').hide();
       $(".profile-contact-details-form input").removeAttr("readonly");  
       $(".profile-contact-details-form input").css("border-bottom", "1px solid black");
    });
   
        $("input[name='profile-contact-mobile']").keyup(function(){
            alert("mobile changed.");
            $("input[name='profile-contact-email']").attr('readonly', true); 
            $("input[name='profile-contact-email']").css("border-bottom", "none");
            $("input[name='profile-contact-other']").attr('readonly', true); 
            $("input[name='profile-contact-other']").css("border-bottom", "none");
            isContactMobileChange = true;
        });

        $("input[name='profile-contact-email']").keyup(function(){
            alert("emil changed.");
            $("input[name='profile-contact-mobile']").attr('readonly', true); 
            $("input[name='profile-contact-mobile']").css("border-bottom", "none");
            $("input[name='profile-contact-other']").attr('readonly', true); 
            $("input[name='profile-contact-other']").css("border-bottom", "none");
            isContactEmailChange = true;
        });

        $("input[name='profile-contact-other']").keyup(function(){
            alert("other changed.");
            $("input[name='profile-contact-mobile']").attr('readonly', true); 
            $("input[name='profile-contact-mobile']").css("border-bottom", "none");
            $("input[name='profile-contact-email']").attr('readonly', true); 
            $("input[name='profile-contact-email']").css("border-bottom", "none");
        });
      
        $('.profile-save-btn').click(function(e)
        {
           e.preventDefault();
            alert("here save");
            if(isContactEmailChange){
                alert("here email change");
            }else if(isContactMobileChange) {
                alert("here mobile change");
            }


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