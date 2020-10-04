export default function initStateCheckbox() {
    const stateCheck = $('.l-check');
    //Состояние чекбоксов
    stateCheck.change(function() {
        if(this.checked) {
            $(this).val('true')
        } else {
            $(this).val('false')
        }
    });
}
