import $ from "jquery";

$(document).ready(function() {
    const actionCountStickers = $('.js-set-count');
    actionCountStickers.click(function() {
        $(this).attr('data-set');
        let currentInput = $(this).parent().parent().find('.js-count-stickers');
        let currentVal = Number(currentInput.val());
        if($(this).attr('data-set') === 'max'){
            currentVal++
            currentInput.val(currentVal)
        } else {
            if(currentVal !== 0){
                currentVal--
                currentInput.val(currentVal)
            }
        }
    });
});
