export default function initTabs() {
    const tabParent = $('.product-tabs');
    if(tabParent.length > 0){
        let tabItems = tabParent.find('.nav-item');
        let item = tabItems.find('.nav-link');

        item.click(function() {
            tabItems.removeClass('active')
            $(this).parent().addClass('active')
        });
    }
}
