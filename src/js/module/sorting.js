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
    const btnSort = $('.catalogs-filter button'),
        box = $('.catalogs-row');

    btnSort.click(function() {
        const type = $(this).attr('data-sort-value');
        btnSort.not($(this)).removeClass('active');
        let state = false;

        $(this).hasClass('active') ? $(this).removeClass('active') : $(this).addClass('active');

        if($(this).hasClass('active')){
            state = true
        }
        if(type !== 'date'){
            sortingByNumber(type, state);
        } else {
            sortingByDate(state);
        }
    });

    function sortingByNumber(type, state){
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
    var items2 = $(".catalogs-item");
    items2.each(function() {
        // Convert the string in 'data-event-date' attribute to a more
        // standardized date format
        var BCDate = $(this).attr("data-date");
        //console.log(BCDate);
        /*console.log(BCDate);
        var standardDate = BCDate[1]+" "+BCDate[0]+" "+BCDate[2];*/
        var standartDate = new Date(BCDate).getTime();
        $(this).attr("data-date", standartDate);
    });

    function sortingByDate(state){
        // var items = document.querySelectorAll('.catalogs-item')
        // let arr = [];
        // Array.from(items).sort(function(a, b) {
        //     // using ~~ to cast the value to a number instead of a string
        //     a = ~~a.getAttribute('data-date');
        //     b = ~~b.getAttribute('data-date');
        //     let sortData;
        //     state ? sortData = b - a : sortData = a - b
        //     return sortData;
        // }).forEach(function(n, i) {
        //     n.style.order = i
        //
        //     arr.push(n)
        // })
        // box.html()
        // box.append(arr)
    }




}