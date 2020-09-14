import $ from "jquery";

$(document).ready(function() {
    $(".l-tab").on("click", function () {
        var el = $(this);
        el.hasClass("active") ? (el.removeClass("active"),
            el.siblings(".answer").stop(!0, !0).slideUp(300)) : ($(".l-tab.active").siblings(".answer").stop(!0, !0).slideUp(300),
            $(".l-tab.active").stop(!0, !0).removeClass("active"),
            el.addClass("active"),
            el.siblings(".answer").stop(!0, !0).slideDown(300))
    })
});
