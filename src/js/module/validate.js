export default function initValidate() {

    $(".validate").submit(function(e){

        let valid = true;
        let inputs = $(this).find('.js-require');

        for (let i = 0; i < inputs.length; i++) {
            if($(inputs[i]).val().length === 0) {
                valid = false;
                $(inputs[i]).parent().parent().addClass('is-error');
            }
            if($(inputs[i]).val() === 'false'){
                valid = false;
                $(inputs[i]).parent().addClass('is-error');
            } else {
                $(inputs[i]).parent().removeClass('is-error');
            }
        }
        if(!valid){
            e.preventDefault();
        }
    });
}
