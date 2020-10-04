export default function initViewElement() {
    let currentView = $('.js-el-view'),
        more = $('.js-view-more'),
        btnCount  = $('.set-count'),
        standart = Number(currentView.attr('data-view-count'));

    const all = $(".view-item").length;



    if(more.length > 0){
        console.log(all + ' всего')
        $('.view-item').hide();
        $('.view-item:lt(' + (standart) + ')').show();
        more.click(function() {
            viewEl();
        });
    }

    function viewEl() {
        let viewCount = Number(currentView.attr('data-view-count')) + Number(currentView.attr('data-count'));
        currentView.attr('data-view-count',viewCount);
        $('.view-item:lt(' + (viewCount) + ')').fadeIn();

        if(viewCount >= all){
            more.attr('disabled','disabled');
        }

    }

    btnCount.click(function() {
        let dataCount = Number($(this).text());
        btnCount.removeClass('active')
        $(this).addClass('active')
        currentView.attr('data-count', dataCount)
        currentView.attr('data-view-count', dataCount)
        $('.view-item').hide();
        $('.view-item:lt(' + (dataCount) + ')').fadeIn();

        if(all > dataCount) {
            more.removeAttr('disabled');
        }

    });


}
