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


//Allows for end message (overlay) be be hidden when the user hits the "Ok" button
$(document).ready(function(){ 
  $("#hide").click(function(){ 
    $("#overlay").hide();  
  });
  $("#show").click(function(){  
    $("#overlay").show(); 
  });
});
