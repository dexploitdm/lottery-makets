import $ from "jquery";


$(document).ready(function() {
    const thumb = $('.product-info-thumb-img'),
        cover = $('.product-info-cover').find('img');

    thumb.click(function() {
        thumb.removeClass('active');
        $(this).addClass('active');
        cover.attr('src',$(this).find('img').attr('src'));
    });
});
