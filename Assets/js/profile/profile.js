$(document).ready(function()
{
 $('.profile-edit-btn').click(function(e)
 {
    e.preventDefault();
     alert("here");
     $(".profile-cancel").show();
     $('.profile-save').show();
     $('.profile-edit').hide();
    $("input[name='profile-contact-fields']").removeAttr("readonly");  
 });

 });