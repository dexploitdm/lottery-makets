export default function initCountDown() {
    const timeDate = $('.js-product-time');
    if(timeDate.length >0){
        const second = 1000,
            minute = second * 60,
            hour = minute * 60,
            day = hour * 24;


        let countDown = new Date(timeDate.attr('data-countdown')).getTime(),
            x = setInterval(function() {

                let now = new Date().getTime(),
                    distance = countDown - now;

                document.getElementById('days').innerText = Math.floor(distance / (day)),
                    document.getElementById('hours').innerText = Math.floor((distance % (day)) / (hour)),
                    document.getElementById('minutes').innerText = Math.floor((distance % (hour)) / (minute));
                // document.getElementById('seconds').innerText = Math.floor((distance % (minute)) / second);

            }, second)
    }
}