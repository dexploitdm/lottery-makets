import $ from "jquery";

$(document).ready(function() {
    const addImage = $('.js-upload-file');
    const removeImage = $('.js-remove-image');
    const previewBlock = $('.l-upload-preview-box');

    addImage.change(function(el) {
        let input = this;
        if (input.files && input.files[0]) {

            for (let i = 0; i < input.files.length; i++) {
                $(previewBlock[i]).addClass('is-load');
                let  previewBox = $(previewBlock[i]).find('.js-upload-preview');

                let reader = new FileReader();
                reader.onload = function(e) {
                    previewBox.attr('src', e.target.result);
                   // $('.image-title').html(input.files[0].name);
                };
                reader.readAsDataURL(input.files[i]);
            }
        }
    });
    removeImage.click(function() {
        if($(this).parent().hasClass('is-load')){
            removeUpload($(this));
        }

    });
    function removeUpload(el) {
        let item = $(el).parent();
        item.removeClass('is-load');
    }

});
