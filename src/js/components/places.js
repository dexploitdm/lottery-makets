

export function placesDataInit(dataPlaces){
    //var dataPlaces = {"data":[{"place":1,"logo":"/test.png","target":true},{"place":2,"logo":"/test.png","target":false},{"place":3,"logo":"/test.png","target":true},{"place":4,"logo":"/test.png","target":false},{"place":5,"logo":"/test.png","target":true},{"place":6,"logo":"/test.png","target":false},{"place":7,"logo":"/test.png","target":false},{"place":8,"logo":"/test.png","target":false},{"place":9,"logo":"/test.png","target":false},{"place":10,"logo":"/test.png","target":false},{"place":11,"logo":"/test.png","target":false},{"place":12,"logo":"/test.png","target":true},{"place":13,"logo":"/test.png","target":false},{"place":14,"logo":"/test.png","target":false},{"place":15,"logo":"/test.png","target":false},{"place":16,"logo":"/test.png","target":true},{"place":17,"logo":"/test.png","target":false},{"place":18,"logo":"/test.png","target":true},{"place":19,"logo":"/test.png","target":false},{"place":20,"logo":"/test.png","target":true},{"place":21,"logo":"/test.png","target":false},{"place":22,"logo":"/test.png","target":false},{"place":23,"logo":"/test.png","target":false},{"place":24,"logo":"/test.png","target":false},{"place":25,"logo":"/test.png","target":false},{"place":26,"logo":"/test.png","target":false},{"place":27,"logo":"/test.png","target":true},{"place":28,"logo":"/test.png","target":false},{"place":29,"logo":"/test.png","target":false},{"place":30,"logo":"/test.png","target":false},{"place":31,"logo":"/test.png","target":true},{"place":32,"logo":"/test.png","target":false},{"place":33,"logo":"/test.png","target":false},{"place":34,"logo":"/test.png","target":false},{"place":35,"logo":"/test.png","target":true},{"place":36,"logo":"/test.png","target":false},{"place":37,"logo":"/test.png","target":true},{"place":38,"logo":"/test.png","target":false},{"place":39,"logo":"/test.png","target":true},{"place":40,"logo":"/test.png","target":false},{"place":41,"logo":"/test.png","target":false},{"place":42,"logo":"/test.png","target":false},{"place":43,"logo":"/test.png","target":false},{"place":44,"logo":"/test.png","target":false},{"place":45,"logo":"/test.png","target":false},{"place":46,"logo":"/test.png","target":true},{"place":47,"logo":"/test.png","target":false},{"place":48,"logo":"/test.png","target":false},{"place":49,"logo":"/test.png","target":false},{"place":50,"logo":"/test.png","target":false}]}

    const placesAll = dataPlaces.data.length; //Количество мест у продукта
    let countPage = 15; //Стандартное количество вывода

    let placesBox = $('.places-layout');
    const more = $('.js-more');
    console.log(dataPlaces)


    initPlaces();
    function initPlaces(){
        let AllPage = Math.ceil(placesAll/countPage);

        placesBox.html('');
        console.log(countPage)
        for (let i = 0; i < countPage; i++) {
            if(dataPlaces.data[i]){
                placesBox.append('<div class="places-item" data-place="'+dataPlaces.data[i].place+'">' +
                    '<div data-c="'+dataPlaces.data[i].target+'"><p>' + dataPlaces.data[i].place + '</p>' +
                    '<img scr="" /></div></div>');
            }


        }
        //Пагинация
        $('.paginate').html('');
        for (let i = 1; i < (AllPage +1); i++) {
            $('.paginate').append('<button class="paginate-item" data-page="'+i+'">' + i + '</button>')
        }

        $('.paginate-item').click(function() {
            let data = Number($(this).attr('data-page')) * countPage;
            let dataStart = data - countPage;
            if(data > placesAll ){
                data = placesAll;
            }
            placesBox.html('');
            for (let i = dataStart; i < data; i++) {
                placesBox.append('<div class="places-item" data-place="'+dataPlaces.data[i].place+'">' +
                    '<div data-c="'+dataPlaces.data[i].target+'"><p>' + dataPlaces.data[i].place + '</p>' +
                    '<img scr="" /></div></div>')
            }
            // console.log(dataPlaces)
        });
        // $('.js-count').text(countPage);
    }


    $('.js-count-s').click(function() {
        let dataCount = Number($(this).attr('data-count'));
        countPage = dataCount;
        initPlaces();
    });

    more.click(function() {
        countPage = countPage + countPage;

        initPlaces();
    });


}
