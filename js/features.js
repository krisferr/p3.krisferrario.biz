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


$('.alarm').click(function() {
    var alarm = new Audio('ping.ogg');
    alarm.play()
})

$('.tick-toc') // loop each menu item
  .each(function(i) {
    if (i != 0) { // only clone if more than one needed
      $("#beep")
        .clone()
        .attr("id", "beep-" + i)
        .appendTo($(this).parent()); 
    }
    $(this).data("beeper", i); // save reference 
  })
  .click(function() {
    $("#beep-" + $(this).data("beeper"))[0].play();
  });
$("#beep").attr("id", "beep-0"); // get first one into naming convention

var globalAudio = new Audio();

function playSong (songName) { 
    var songUrl = songName + ".wav";
    globalAudio.src = songUrl;
    globalAudio.play();
}



<html>
    <head>
    <script>
        function quesfl(qsvalue) { 
        var audio1= document.getElementById("audio1");
        document.getElementById("bebo1").src = qsvalue + ".wav";
        audio1.load();
        audio1.play();
        }
    </script>

    </head>
    <body>
    <input type="radio" name="qno" value="02" onClick="quesfl(this.value);">2
    <input type="radio" name="qno" value="03" onClick="quesfl(this.value);">3
    <input type="radio" name="qno" value="04" onClick="quesfl(this.value);">4

    <center><audio controls id="audio1">
    <source id="bebo1" type="audio/wav">
    Your browser does not support this audio format.
    </audio></center><br>
    </body>
</html>


//Allows for end message (overlay) be be hidden when the user hits the "Ok" button
$(document).ready(function(){ 
  $("#hide").click(function(){ 
    $("#overlay").hide();  
  });
  $("#show").click(function(){  
    $("#overlay").show(); 
  });
});
