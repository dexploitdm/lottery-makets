import $ from "jquery";

$(document).ready(function() {
    const agreeCheck = $('.js-agree');
    if(agreeCheck.length > 0){
        const btnFormValid = $('.js-valid-state');
        agreeCheck.change(function() {
            if(this.checked) {
                $(this).val('true')
                btnFormValid.removeAttr('disabled');
            } else {
                $(this).val('false')
                btnFormValid.attr('disabled','disabled');
            }
        });

    }

});
