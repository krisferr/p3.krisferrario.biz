//User can select background image
$('.kitchen').click(function(){
    var kitchen_clicked = $(this).css('background-image');
    $('body').css('background-image', kitchen_clicked);
});


//User can select the type of clock from produce list
$('.produce').click(function(){
    var produce_clicked = $(this).css('background-image');
    $('#clock-type').css('background-image', produce_clicked);
});

//User can select alarm that will play once when time is up.
alarm = function(){
    $('input[type=radio]').change(function(){
        if($('#alarm_clock_bell_ringing').is(':checked'))
        {
            alarm = new Audio('../audio/alarm_clock_bell_ringing.mp3');
    
        }
        else if($('#cuckoo_clock_striking_2_o_clock').is(':checked'))
        {
            alarm = new Audio('../audio/cuckoo_clock_striking_2_o_clock.mp3');
    
        }
        else if ($('#grandfather_clock_striking_half_hour').is(':checked'))
        {
            alarm = new Audio('../audio/grandfather_clock_striking_half_hour.mp3');
        
        }
        else if($('#12_clock_chime').is(':checked'))
        {
            alarm = new Audio('../audio/12_clock_chime.mp3');
        }
        else
        {
            alarm = null;
        }
        alarm.loop = false;
        alarm.play();
    });
        
};

//User can select a tick-toc noise 
$(document).ready(function(){
    
    $('input[type=radio]').change(function(){
        
        if($('#clock_tick_001').is(':checked'))
        {
            tickToc = new Audio('../audio/clock_tick_001.mp3');
        }
        
        else if($('#clock_tick_002').is(':checked'))
        {
            tickToc = new Audio('../audio/clock_tick_002.mp3');
        }
        
        else if ($('#electric_clock_ticking').is(':checked'))
        {
            tickToc = new Audio('../audio/electric_clock_ticking.mp3');
        }
        
        else if($('#none').is(':checked'))
        {
            tickToc = null;
        }
        
        else
        {
            //do nothing
        }
        
        tickToc.loop = true;
        tickToc.play();
    });
        
});


//Allows for end message (overlay) be be hidden when the user hits the "Ok" button
$(document).ready(function(){ 
  $("#hide").click(function(){ 
    $("#overlay").hide();  
  });
  $("#show").click(function(){  
    $("#overlay").show(); 
  });
});


