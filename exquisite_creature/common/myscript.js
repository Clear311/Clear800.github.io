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
    $( "#resizable" ).resizable();
  } );

$( function() {
    $( "#resizable2" ).resizable();
  } );

$( function() {
    $( "#resizable3" ).resizable();
  } );

  $( function() {
    $( "#resizable4" ).resizable();
  } );

  function flip() {
    $('.card').toggleClass('flipped');
}

function flip2() {
    $('.card-2').toggleClass('flipped');
}

function flip3() {
    $('.card-3').toggleClass('flipped');
}

function flip4() {
    $('.card-4').toggleClass('flipped');
}

function flip3() {
    var userinput = document.getElementById("answer-2").value;
    if (userinput == "a"){
      document.getElementById('resizable3').getElementsByTagName('img')[0].src='nose/camelnose.png'
    }
    else if(userinput == "b"){
      document.getElementById('resizable3').getElementsByTagName('img')[0].src='nose/tigernose.png'
    }
    else if(userinput == "c"){
        document.getElementById('resizable3').getElementsByTagName('img')[0].src='nose/mousenose.png'
      }
    else if(userinput == "d"){
      document.getElementById('resizable3').getElementsByTagName('img')[0].src='nose/monkeynose.png'
    }
    else if(userinput == "e"){
        document.getElementById('resizable3').getElementsByTagName('img')[0].src='nose/mnose.png'
      }
    else if(userinput == "f"){
        document.getElementById('resizable3').getElementsByTagName('img')[0].src='nose/sealnose.png'
    }
    else if(userinput == "g"){
        document.getElementById('resizable3').getElementsByTagName('img')[0].src='nose/pignose.jpg'
    }
    else if(userinput == "h"){
        document.getElementById('resizable3').getElementsByTagName('img')[0].src='nose/pugnose.png'
    }
    else if(userinput == "i"){
        document.getElementById('resizable3').getElementsByTagName('img')[0].src='nose/oxnose.png'
    }
    else if(userinput == "j"){
        document.getElementById('resizable3').getElementsByTagName('img')[0].src='nose/littlenose.png'
    }
    else if(userinput == "k"){
        document.getElementById('resizable3').getElementsByTagName('img')[0].src='nose/horsenose.jpg'
    }
    else if(userinput == "l"){
        document.getElementById('resizable3').getElementsByTagName('img')[0].src='nose/gorillanose.png'
    }
    else if(userinput == "m"){
        document.getElementById('resizable3').getElementsByTagName('img')[0].src='nose/elephantnose.jpg'
    }
    else if(userinput == "n"){
        document.getElementById('resizable3').getElementsByTagName('img')[0].src='nose/dognose.jpg'
    }
    else if(userinput == "o"){
        document.getElementById('resizable3').getElementsByTagName('img')[0].src='nose/eaglenose.png'
    }
    else if(userinput == "p"){
        document.getElementById('resizable3').getElementsByTagName('img')[0].src='nose/cownose.png'
    }
    else if(userinput == "q"){
        document.getElementById('resizable3').getElementsByTagName('img')[0].src='nose/catnose.jpg'
    }
    else if(userinput == "r"){
        document.getElementById('resizable3').getElementsByTagName('img')[0].src='nose/humannose.png'
    }
    else if(userinput == "s"){
        document.getElementById('resizable3').getElementsByTagName('img')[0].src='nose/flowernose.png'
    }
    else if(userinput == "t"){
        document.getElementById('resizable3').getElementsByTagName('img')[0].src='nose/birdnose.png'
    }
    else if(userinput == "u"){
        document.getElementById('resizable3').getElementsByTagName('img')[0].src='nose/oxnose.png'
    }
    else if(userinput == "v"){
        document.getElementById('resizable3').getElementsByTagName('img')[0].src='nose/monsternose.png'
    }
    else if(userinput == "w"){
        document.getElementById('resizable3').getElementsByTagName('img')[0].src='nose/bearnose.png'
    }
    else if(userinput == "x"){
        document.getElementById('resizable3').getElementsByTagName('img')[0].src='nose/bugnose.png'
    }
    else if(userinput == "y"){
        document.getElementById('resizable3').getElementsByTagName('img')[0].src='nose/allinose.png'
    }
    else if(userinput == "z"){
        document.getElementById('resizable3').getElementsByTagName('img')[0].src='nose/unkownnose.png'
    }
    $('.card-3').toggleClass('flipped');
}


function flip4() {
    var userinput = document.getElementById("answer-3").value;
    if (userinput == "a"){
      document.getElementById('resizable4').getElementsByTagName('img')[0].src='beautiful-island.jpg'
    }
    else if(userinput == "b"){
      document.getElementById('resizable4').getElementsByTagName('img')[0].src='pagetwo_graph_two_2.png'
    }
    $('.card-4').toggleClass('flipped');
}
