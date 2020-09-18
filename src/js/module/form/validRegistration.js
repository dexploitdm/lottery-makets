export default function initValidRegistration() {
    const password =  $('.valid-pass'),
        rePass = $('.valid-re-pass'),
        email = $('.valid-email'),
        string = $('.valid-string');


    password.on("input",function(ev){
        //TODO: Здесь валидация - только англ. символы и >=8
        //let pass = $(ev.target).val();
        // if(pass.match(/[^a-zA-Z0-9]+/)){
        //     password.parent().parent().addClass('is-error');
        //     password.parent().find('.l-form-control-msg').text('Допустимы латинские буквы и цифры');
        // } else if (pass.length < 8 && pass.length != 0) {
        //     password.parent().parent().addClass('is-error');
        //     password.parent().find('.l-form-control-msg').text('Пароль должен состоять из 8 символов и более');
        // } else {
        //     password.parent().parent().removeClass('is-error');
        //     if(rePass.val().length > 0){
        //         comparePass();
        //     }
        // }
        if(rePass.val().length > 0){
            comparePass();
        }
    });
    rePass.on("input",function(ev){
        if(rePass.parent().parent().hasClass('is-error')){
            comparePass();
        }
    });
    rePass.focusout(function() {
        comparePass();
    });
    function comparePass(){
        rePass.val() !== password.val() ?  addErrorPass() : removeErrorPass();
    }
    function addErrorPass(){
        password.parent().parent().addClass('is-error');
        rePass.parent().parent().addClass('is-error');
    }
    function removeErrorPass(){
        password.parent().parent().removeClass('is-error');
        rePass.parent().parent().removeClass('is-error');
    }

    //Валидация email
    email.focusout(function() {
        validEmail();
    });
    function validEmail(){
        let isValidEmail = validateEmail(email.val());
        isValidEmail ? email.parent().parent().removeClass('is-error') : email.parent().parent().addClass('is-error');
    }
    function validateEmail(email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    //Обязательное поле
    string.focusout(function() {
        console.log(string.val().length)
        string.val().length > 1 ? string.parent().parent().removeClass('is-error') : string.parent().parent().addClass('is-error');
    });
}