function  validatePhone(txtPhone) {
//   alert("valid");
    var  filter  =  /^(?:\+971|00971|0)?(?:50|51|52|55|56|54|57)\d{7}$/;
    if  (filter.test(txtPhone)) {
        // alert("if");
        // if (txtPhone.length == 10) {
            return  true;
        // }
        // return  false;
    }else {
        // alert("else");
        return false;
    }
    
}

function  validateEmail(email) {
   
    var  emailReg  =  /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    return  emailReg.test( email );
} 