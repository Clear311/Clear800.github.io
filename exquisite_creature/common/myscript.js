$(document).ready(function(){
  
    animateDiv();

    $("#button").click(function() {
      animateDiv();
      animateDiv();
      animateDiv();
    });
});

function makeNewPosition(){

    var h = $(window).height() - 300;
    var w = $(window).width() - 300;

    var nh = Math.floor(Math.random() * h);
    var nw = Math.floor(Math.random() * w);

    return [nh,nw];
    
}

function makeNewPosition2(){
  
    var h = $(window).height() - 300;
    var w = $(window).width() - 300;
    
    var nh2 = Math.floor(Math.random() * h);
    var nw2 = Math.floor(Math.random() * w);
    
    return [nh2,nw2];
    
}

function makeNewPosition3(){
  
    var h = $(window).height() - 300;
    var w = $(window).width() - 300;
    
    var nh3 = Math.floor(Math.random() * h);
    var nw3 = Math.floor(Math.random() * w);
    
    return [nh3,nw3];
    
}

function makeNewPosition4(){
  
    var h = $(window).height() - 300;
    var w = $(window).width() - 300;
    
    var nh4 = Math.floor(Math.random() * h);
    var nw4 = Math.floor(Math.random() * w);
    
    return [nh4,nw4];
    
}

function animateDiv(){

    var newq = makeNewPosition();
    var newq2 = makeNewPosition2();
    var newq3 = makeNewPosition3();
    var newq4 = makeNewPosition4();

    $('.block_red').animate({ top: newq[0], left: newq[1] }, 250)
    $('.block_blue').animate({ top: newq2[0], left: newq2[1] }, 250)
    $('.block_yellow').animate({ top: newq3[0], left: newq3[1] }, 250)
    $('.block_orange').animate({ top: newq4[0], left: newq4[1] }, 250)
  
};

$( function() {
    $( "#draggable" ).draggable();
  } );

$( function() {
    $( "#draggable2" ).draggable();
  } );

$( function() {
    $( "#draggable3" ).draggable();
  } );

$( function() {
    $( "#draggable4" ).draggable();
  } );

$( function() {
    $( "#draggable" ).resizable();
  } );

$( function() {
    $( "#draggable2" ).resizable();
  } );

$( function() {
    $( "#draggable3" ).resizable();
  } );

  $( function() {
    $( "#draggable4" ).resizable();
  } );

  function flip() {
    $('.card').toggleClass('flipped');
}