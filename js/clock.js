var button = new (function() {
    var $clock,
        $form, // Form used to change the countdown time
        incrementTime = 70,
        currentTime = 120000,
        updateTimer = function() {
            $clock.html(formatTime(currentTime));
            if (currentTime == 0) {
                button.Timer.stop();
                timerComplete();
                button.resetCountdown();
                return;
            }
            currentTime -= incrementTime / 10;
            if (currentTime < 0) currentTime = 0;
        },
        timerComplete = function() {  
            message = document.getElementById("overlay");
            message.style.visibility = (message.style.visibility == "visible") ? "hidden" : "visible";
            //alert('Times Up');
        },
        
        init = function() {
            $clock = $('#clock');
            button.Timer = $.timer(updateTimer, incrementTime, true);
            $form = $('#button');
            $form.bind('submit', function() {
                button.resetCountdown();
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
