export default function initCollapse() {
    $(".l-tab").on("click", function () {
        var el = $(this);
        let singleBlock = $(this).hasClass('single');
        let blocks = $(".l-tab.active:not(.single)");
        if(singleBlock){
            blocks = $(this).find('.active');
        }
        el.hasClass("active") ? (el.removeClass("active"),
            el.siblings(".answer").stop(!0, !0).slideUp(300)) : ($(blocks).siblings(".answer").stop(!0, !0).slideUp(300),
            $(blocks).stop(!0, !0).removeClass("active"),
            el.addClass("active"),
            el.siblings(".answer").stop(!0, !0).slideDown(300))
    })
}