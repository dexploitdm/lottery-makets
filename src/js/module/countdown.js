import $ from "jquery";

$(document).ready(function() {
    const second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24,
        timeDate = $('.js-product-time').attr('data-countdown');

    let countDown = new Date(timeDate).getTime(),
        x = setInterval(function() {

            let now = new Date().getTime(),
                distance = countDown - now;

            document.getElementById('days').innerText = Math.floor(distance / (day)),
                document.getElementById('hours').innerText = Math.floor((distance % (day)) / (hour)),
                document.getElementById('minutes').innerText = Math.floor((distance % (hour)) / (minute));
                // document.getElementById('seconds').innerText = Math.floor((distance % (minute)) / second);

            //do something later when date is reached
            //if (distance < 0) {
            //  clearInterval(x);
            //  'IT'S MY BIRTHDAY!;
            //}

        }, second)
});
