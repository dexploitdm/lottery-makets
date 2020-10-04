export default function initCatalogs() {
    let currentView = $('.js-cat-view'),
        more = $('.js-more'),
        btnCount  = $('.set-count'),
        standart = Number(currentView.attr('data-view-count'));
    // console.log(currentView)

    const all = $(".catalogs-item").length;



    if(more.length > 0){
        console.log(all + ' всего')
        $('.catalogs-item').hide();
        $('.catalogs-item:lt(' + (standart) + ')').show();
        more.click(function() {
            viewCatalogs();
        });
    }
    endPage();

    function viewCatalogs() {
        let viewCount = Number(currentView.attr('data-view-count')) + Number(currentView.attr('data-count'));
        currentView.attr('data-view-count',viewCount);
        $('.catalogs-item:lt(' + (viewCount) + ')').fadeIn();

        if(viewCount >= all){
            more.attr('disabled','disabled');
        }
        endPage();
    }

    btnCount.click(function() {
        let dataCount = Number($(this).text());
        btnCount.removeClass('active')
        $(this).addClass('active')
        currentView.attr('data-count', dataCount)
        currentView.attr('data-view-count', dataCount)
        $('.catalogs-item').hide();
        $('.catalogs-item:lt(' + (dataCount) + ')').fadeIn();

        if(all > dataCount) {
            more.removeAttr('disabled');
        }

        endPage();
    });

    function endPage(){
        // let end = Math.ceil((all - Number(currentView.attr('data-view-count'))) / Number(currentView.attr('data-count')) + 1);
        // console.log(all + ' / ' +Number(currentView.attr('data-view-count')))
        // console.log(end)
    }

}
