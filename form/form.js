function checkForm(form) {

    if (form.password.value != form.againpassword.value) {

        form.password.focus();
        return false;

    } else {
        return true;
    }



}

