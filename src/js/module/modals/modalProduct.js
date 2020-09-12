import $ from "jquery";

$(document).ready(function() {
    const placeItem = $('.places-item');
    const modalSetPlace = $('.js-set-place');
    if(placeItem.length > 0){
        placeItem.click(function() {
            if($(this).find('.place').attr('data-c') === 'false'){
                let placeNum = $(this).attr('data-place');
                $("#confirmatioтOfBet").modal('show');
                modalSetPlace.text(placeNum);
            }
        });
    }
})
