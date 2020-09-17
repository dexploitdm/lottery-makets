export default function initSortingProduct() {
    var $grid = $('.catalogs-row').isotope({
        itemSelector: '.col-media',
        layoutMode: 'fitRows',
        sortBy: 'date',
        getSortData: {
            fileby:   '.file-by',
            //filedate: '[data-ticks]',
            repost: function( itemElem ) {
                var repost = $( itemElem ).attr('data-repost');
                return parseInt( repost );
            },
            popular: function( itemElem ) {
                var popular = $( itemElem ).attr('data-popular');
                return parseInt( popular );
            },
            places: function( itemElem ) {
                var places = $( itemElem ).attr('data-places');
                return parseInt( places );
            },
            date: function (itemElem) {
                var date = $(itemElem).find('.catalog-date').text();
                var   dateArray = date.split('.');
                var    year = dateArray[2];
                var   month = dateArray[0];
                var     day = dateArray[1];
                return new Date(year, month, day);
            }
        }
    });

// bind sort button click
    $('.sort-button-group').on( 'click', 'button', function() {

        /* Get the element name to sort */
        var sortValue = $(this).attr('data-sort-value');

        /* Get the sorting direction: asc||desc */
        var direction = $(this).attr('data-sort-direction');

        /* convert it to a boolean */
        var isAscending = (direction == 'asc');
        var newDirection = (isAscending) ? 'desc' : 'asc';

        /* pass it to isotope */
        $grid.isotope({ sortBy: sortValue, sortAscending: isAscending });

        $(this).attr('data-sort-direction', newDirection);

        var span = $(this).find('.f-icon');
        span.toggleClass('f-icon-down f-icon-up');

    });
}