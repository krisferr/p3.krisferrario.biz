var clock = new (function() {
    var $countdown,
        $form, // Form used to change the countdown time
        incrementTime = 70,
        currentTime = 120000,
        updateTimer = function() {
            $countdown.html(formatTime(currentTime));
            if (currentTime == 0) {
                clock.Timer.stop();
                timerComplete();
                clock.resetCountdown();
                return;
            }
            currentTime -= incrementTime / 10;
            if (currentTime < 0) currentTime = 0;
        },
        timerComplete = function() {
            alert('Times Up');
        },
        init = function() {
            $countdown = $('#countdown');
            clock.Timer = $.timer(updateTimer, incrementTime, true);
            $form = $('#clock');
            $form.bind('submit', function() {
                clock.resetCountdown();
                return false;
            });
        };
    this.resetCountdown = function() {
        var newTime = parseInt($form.find('input[type=text]').val()) * 6000;
        if (newTime > 0) {currentTime = newTime;}
        this.Timer.stop().once();
    };
    $(init);
});


//Changes the int into a String
function intToString(number, length) {
    var str = '' + number;
    while (str.length < length) {str = '0' + str;}
    return str;
}

//Formats the time display into minutes, seconds, and hundreths
function formatTime(time) {
    var min = parseInt(time / 6000),
        sec = parseInt(time / 100) - (min * 60),
        hundredths = intToString(time - (sec * 100) - (min * 6000), 2);
    return (min > 0 ? intToString(min, 2) : "00") + ":" + intToString(sec, 2) + ":" + hundredths;
}
