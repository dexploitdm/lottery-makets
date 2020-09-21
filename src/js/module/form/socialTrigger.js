export default function initSocialTrigger() {
    const btnSoc =  $('.js-trigger-soc'),
        inputSocial = $('.js-social-reviews');

    btnSoc.click(function() {
        let social = $(this).attr('data-soc-rev');
        btnSoc.removeClass('active');
        $(this).addClass('active');
        inputSocial.val(social)
    });
}