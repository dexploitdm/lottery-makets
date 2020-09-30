export default function initSortingProduct() {
//     var $grid = $('.catalogs-row').isotope({
//         itemSelector: '.col-media',
//         layoutMode: 'fitRows',
//         // sortBy: 'date',
//         getSortData: {
//             // fileby:   '.file-by',
//             //filedate: '[data-ticks]',
//             repost: function( itemElem ) {
//                 var repost = $( itemElem ).attr('data-repost');
//                 return parseInt( repost );
//             },
//             popular: function( itemElem ) {
//                 var popular = $( itemElem ).attr('data-popular');
//                 return parseInt( popular );
//             },
//             places: function( itemElem ) {
//                 var places = $( itemElem ).attr('data-places');
//                 return parseInt( places );
//             },
//             date: function (itemElem) {
//                 var date = $(itemElem).find('.catalog-date').text();
//                 var   dateArray = date.split('.');
//                 var    year = dateArray[2];
//                 var   month = dateArray[0];
//                 var     day = dateArray[1];
//                 return new Date(year, month, day);
//             }
//         }
//     });
//
// // bind sort button click
//     $('.sort-button-group').on( 'click', 'button', function() {
//
//         /* Get the element name to sort */
//         var sortValue = $(this).attr('data-sort-value');
//
//         /* Get the sorting direction: asc||desc */
//         var direction = $(this).attr('data-sort-direction');
//
//         /* convert it to a boolean */
//         var isAscending = (direction == 'asc');
//         var newDirection = (isAscending) ? 'desc' : 'asc';
//
//         /* pass it to isotope */
//         $grid.isotope({ sortBy: sortValue, sortAscending: isAscending });
//
//         $(this).attr('data-sort-direction', newDirection);
//
//         var span = $(this).find('.f-icon');
//         span.toggleClass('f-icon-down f-icon-up');
//
//     });
    const btnPop = $('.catalogs-filter button'),
        box = $('.catalogs-row');

    btnPop.click(function() {
        const type = $(this).attr('data-sort-value');
        btnPop.not($(this)).removeClass('active');
        let state = false;

        $(this).hasClass('active') ? $(this).removeClass('active') : $(this).addClass('active');

        if($(this).hasClass('active')){
            state = true
        }
        if(type !== 'date'){
            sortingByPrice(type, state);
        }
    });

    function sortingByPrice(type, state){
        var items = document.querySelectorAll('.catalogs-item')
        let arr = []
        Array.from(items).sort(function(a, b) {
            // using ~~ to cast the value to a number instead of a string
            a = ~~a.getAttribute('data-' + type);
            b = ~~b.getAttribute('data-' + type);
            let sortData;
            state ? sortData = b - a : sortData = a - b
            return sortData;
        }).forEach(function(n, i) {
            n.style.order = i

            arr.push(n)
        })
        box.html()
        box.append(arr)
    }

}