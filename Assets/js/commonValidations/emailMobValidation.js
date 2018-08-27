function  validatePhone(txtPhone) {
    alert("validatePhn");
    var  filter  =  /^(?:\+971|00971|0)?(?:50|51|52|55|56|54|57)\d{7}$/;
    if  (filter.test(txtPhone)) {
        if (txtPhone.length == 10) {
            return  true;
        }
        return  false;
    }
}

function  validateEmail(email) {
    alert("validateEmail");
    var  emailReg  =  /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    return  emailReg.test( email );
} 