
$(document).ready(function() {

var goombaCaught = $( '#goombas-caught');
var bobombCaught = $( '#bob-ombs-caught');
var cheepcheepCaught = $( '#cheep-cheep-caught');

var goombaMultiplier = $( '#goomba-multiplier' );
var bobombMultiplier = $( '#bob-omb-multiplier' );
var cheepcheepMultiplier = $( '#cheep-cheep-multiplier' );

var goombaTotal = $( '#goomba-total' );
var bobombTotal = $( '#bob-omb-total');
var cheepcheepTotal = $( '#cheep-cheep-total');

    
var grandTotal = $( '#grand-total' );

//calculate total coins for each baddie and grand total and update the values on the screen
function setTotals() {
    var gTot = parseInt(goombaCaught.val() * goombaMultiplier.text());
    var bTot = parseInt(bobombCaught.val() * bobombMultiplier.text());
    var cTot = parseInt(cheepcheepCaught.val() * cheepcheepMultiplier.text());
    goombaTotal.text(gTot.toLocaleString());
    bobombTotal.text(bTot.toLocaleString());
    cheepcheepTotal.text(cTot.toLocaleString());
    grandTotal.text((gTot + bTot + cTot).toLocaleString());
}

/*

HANDLE INPUT SECTION

ALLOW user to increase or decrease the number of any baddies caught by
CLICKING on the + or - buttons, or with the KEYBOARD (while the focus is 
in the input box) by either ARROW UP or ARROW DOWN or by TYPING NUMBERS.

DO NOT ALLOW non-number characters to be entered.

CONTINUOUSLY increase or decrease the value if the MOUSE BUTTON is held
down while over the + or - buttons (the up/down arrow keys also do this).  

*/
    
//handle direct keyboard input of number
//Prevent anything other than integer numbers to be entered.
// Increment/decrement on up arrow or down arrow.
$('input').keydown(function(e) {
    var key = $(this).val();
    var thisInput = $(this);
    if(e.which === 38) {
        coinChange(true, thisInput, key);
        playSound('coin');
    } else if (e.which === 40) {
        coinChange(false, thisInput, key);
        playSound('minusCoin');
    } // Allow: Ctrl+A, Command+A, delete, backspace, tab, esc, or enter, home, end, left, right
      else if ((e.which === 65 && (e.ctrlKey === true || e.metaKey === true)) || (e.which >= 35 && e.which <= 40) || ($.inArray(e.which, [46, 8, 9, 27, 13]) !== -1)) {
                 // let it happen, don't do anything
                 return;
    }  // Ensure that it is not a number and stop the keypress
      else if ((e.shiftKey || (e.which < 48 || e.which > 57)) && (e.which < 96 || e.which > 105)) {
            e.preventDefault();
    }
      else { 
        setTimeout(function() { //causes totals to update after new digit is added
            setTotals();
        }, 1); 
    }
});
    
//For backspace and delete keys, refresh the totals after the digit is removed
$('input').keyup(function(e) {
   if(e.which === 8 || e.which === 46) {
       setTotals();
   } 
});

//Handle if a 'plus' or 'minus' button is clicked on the screen
$( '.btn-plus' ).click(function() {
    var thisInput = $(this).siblings('input');
    //increment number of coins for the related baddie once on each click on the onscreen '+' button
    coinChange(true, thisInput, $(thisInput).val());
    playSound('coin');
    
    //animate the '+' button press
    $(this).addClass('press-button');

    //bounce the coin
    var thisCoinImg = $(thisInput).closest('.list-group').find('img');
    $(thisCoinImg).addClass('coinBounce');

    //squish the baddie image
    $(thisInput).closest('.thumbnail').find('.baddie-thumb').addClass('baddie-smash');
    
    //spin the background of the Total Coins 
    $('#grand-total-background').addClass('spin-disk');
    $('.spin-disk').css({animationIterationCount : 'infinite'});
    
    //clear the animation classes
    setTimeout(function() {
        $('.input-group-addon').removeClass('press-button');
        $(thisInput).closest('.list-group').find('img').removeClass('coinBounce');
        $(thisInput).closest('.thumbnail').find('.baddie-thumb').removeClass('baddie-smash');
        $('#grand-total-background').removeClass('spin-disk');
    }, 300);

});
    
$( '.btn-minus' ).click(function() {
    var thisInput = $(this).siblings('input');
    //decrease number of coins by one on each click on the onscreen '-' button
    coinChange(false, thisInput, $(thisInput).val());
    playSound('minusCoin');

    //animate the button press
    $(this).addClass('press-button');
    
    //animation for baddie thumbnail img when losing coins
    $(thisInput).closest('.thumbnail').find('.baddie-thumb').addClass('baddie-gloat');

    //clear the animation classes
    setTimeout(function() {
        $('.input-group-addon').removeClass('press-button');
        $(thisInput).closest('.thumbnail').find('.baddie-thumb').removeClass('baddie-gloat');
    }, 150);
    
});


//Handle prolonged mousedown and mouseup events with the 'plus' and 'minus' buttons on screen
var myIntervalID;

//Continuous incrementing of the value if the mouse is held down over a 'plus' or 'minus' button on the screen
$( '.btn-plus' ).mousedown(function() {
    var thisInput = $(this).siblings('input');
    myIntervalID = setInterval(function() {
            coinChange(true, thisInput, $(thisInput).val());
            playSound('coin');
        }, 150);

    //spin the background of the Total Coins once for a click on a plus button
    $('#grand-total-background').addClass('spin-disk');
    $('.spin-disk').css({ animationIterationCount : 'infinite'});
    
    //make the button press repeatedly
    $(this).addClass('press-button');
    $('.press-button').css({ animationIterationCount : 'infinite'});
    
    //bounce the coin
    var thisCoinImg = $(thisInput).closest('.list-group').find('img');
    $(thisCoinImg).addClass('coinBounce');
    $('.coinBounce').css({ animationIterationCount : 'infinite'});

    //smash the baddie image
    $(this).closest('.thumbnail').find('.baddie-thumb').addClass('baddie-smash');
    $('.baddie-smash').css({ animationIterationCount : 'infinite'});
    
});

$( '.btn-minus' ).mousedown(function() {
    var thisInput = $(this).siblings('input');
    myIntervalID = setInterval(function() {
            coinChange(false, thisInput, $(thisInput).val());
            playSound('minusCoin');

        }, 150);

    //make the button press repeat during hold-down
    $(this).addClass('press-button');
    $('.press-button').css({ animationIterationCount : 'infinite'});

    $(thisInput).closest('.thumbnail').find('.baddie-thumb').addClass('baddie-gloat');
    $('.baddie-gloat').css({ animationIterationCount : 'infinite'});

});

var myInterval

//cancel continuous incrementing after mouse button is released or mouse leaves the button area
$( '.btn-plus' ).on('mouseup mouseout ondragstart', function(){
    clearInterval(myIntervalID);
    $('#grand-total-background').removeClass('spin-disk');
    $(this).removeClass('press-button');
    $(this).closest('.list-group').find('img').removeClass('coinBounce');
    $(this).closest('.thumbnail').find('.baddie-thumb').removeClass('baddie-smash');
    return false;
});
    
$( '.btn-minus' ).on('mouseup mouseout ondragstart', function(){
    clearInterval(myIntervalID);
    $(this).removeClass('press-button');
    $(this).closest('.thumbnail').find('.baddie-thumb').removeClass('baddie-gloat');
    return false;
});
    
    
//increase or decrease the number of baddies caught
function coinChange (isCoinUp, whichInput, value) {
    if (isCoinUp) {
        value ++;
        $(whichInput).val(value);
//        playSound(); //function to be written
        setTotals();

    } else {
        value --;
        $(whichInput).val(value);
//        playSound();
        setTotals();
    }
}
    
    
  //refresh the coin totals on the page  
setTotals();


//lock the poisition of the Total Coins element once it is scrolled to the top of the window
$(window).on('scroll', function() {
    if (($(window).width() <= 685) && ($(this).scrollTop() >=274)) {
        $('#grand-total-section').addClass('affix');
    } else if (($(window).width() > 685) && ($(this).scrollTop() >= 60)) {
        $('#grand-total-section').addClass('affix');
    } else {
        $('#grand-total-section').removeClass('affix');
    }
    });


/////////////////
//SOUND EFFECTS
////////////////

//var audioObj = document.createElement('audio');
//audioObj.src="sounds/Mario-coin-sound.mp3";
//////audioObj.volume=0.90;
//audioObj.preLoad=true;
//$(document).add(audioObj);
    var playCoin = {};
    var coinSound = {0: "sounds/Mario-coin-sound.mp3", 1:"sounds/Mario-coin-sound.mp3", 2:"sounds/Mario-coin-sound.mp3", 3:"sounds/Mario-coin-sound.mp3", 4:"sounds/Mario-coin-sound.mp3",5:"sounds/Mario-coin-sound.mp3",6:"sounds/Mario-coin-sound.mp3"};
    var playMinusCoin = {};
    var minusCoinSound = {0: "sounds/mb_touch.wav", 1:"sounds/mb_touch.wav", 2:"sounds/mb_touch.wav", 3:"sounds/mb_touch.wav",4:"sounds/mb_touch.wav",5:"sounds/mb_touch.wav",6:"sounds/mb_touch.wav"};
    var i = 0;
    var j = 0;
    function playSound(soundName) {
        if(soundName === 'coin') {
            if (i === 7) {i = 0}
                playCoin[i] = new Audio(coinSound[i]);
                playCoin[i].play();
                i ++;
            //    alert('auioobj ' + $('audio').attr('src'));
            //    $('#coin-sound')[0].play();
        } else if (soundName === 'minusCoin') {
            if (j === 7) {j = 0}
                playMinusCoin[j] = new Audio(minusCoinSound[j]);
                playMinusCoin[j].play();
                j ++;
        }
        
    }


    ///////////////////////////////
    ///////////////////////////////
    ///  Toggle Light-Dark Mode  //
    ///////////////////////////////
    ///////////////////////////////
    var isModeLight = true;
    $('#switchto-dark-mode').click(function() {
        if (isModeLight) {
            //change main background to dark
            $('.main-content').css({backgroundColor: '#333'});
            //darken the footer background
            $('.footer').css({backgroundColor: '#555'});
            //screen the jumbotron background image with a semi-transparent darkener
            $('.jumbotron').css({background: 'linear-gradient(rgba(0,0,0,.5), rgba(0,0,0,.5)), url(images/mario-enemies-900x603.png)', 'background-position':'center', backgroundRepeat: 'no-repeat', backgroundSize: '100%'});
            
            //darken colors in heading
            $('.red').css({color: 'rgba(200,1,4,1)'});
            $('.green').css({color: 'rgb(70,184,4)'});
            $('.yellow').css({color: 'rgb(224,173,51)'});
            $('.blue').css({color: 'rgb(52,117,215)'});
            $('.red-background').css({backgroundColor : 'rbg(200,1,4)'});
            $('.yellow-border').css({borderColor: 'rgb(215,215,0'});

            //darken the main thumbnail panels
            $('.thumbnail').css({background: 'rgb(70,184,4)'});
            //change the 'Dark-Mode/Light-Mode switch for better visibility in dark-mode'
            $('.input-group-addon').css({backgroundColor: 'rgba(200,1,4,1)'});
            $('.input-group-addon').children('span').css({color: '#ccc'});
            $('.number-caught').css({backgroundColor: '#222', color: 'goldenrod', boxShadow: '0 9px 0 0 #010101'});

            $('.light-dark-toggle').css({color: '#acacac'});
            //change the label in the button to 'Light-Mode'
            $('.light-dark-toggle').children('span').last().text(' Light-Mode');

            isModeLight = false;
        } else {
            $('.main-content').css({backgroundColor: '#5c9dff'});
            $('.footer').css({backgroundColor: '#5c9dff'});
            $('.jumbotron').css({'background-image': 'url(images/mario-enemies-900x603.png)'});
            $('.red').css({color: '#eb1f22'});
            $('.green').css({color: '#78ea2c'});
            $('.yellow').css({color: '#fecb51'});
            $('.blue').css({color: '#5c9dff'});
            $('.red-background').css({backgroundColor : 'red'});
            $('.yellow-border').css({borderColor: 'yellow'});


            $('.thumbnail').css({background: '#78ea2c'});
            $('.input-group-addon').css({backgroundColor: '#eb1f22'});
            $('.input-group-addon').children('span').css({color: 'white'});
            $('.number-caught').css({backgroundColor: '#efefef', color: '#010101', boxShadow: '0 9px 0 0 #222'});
            //change the 'Dark-Mode/Light-Mode switch for better visibility'
            $('.light-dark-toggle').css({color: 'rgba(0,0,0, 0.7)'});
            //change the label in the button back to 'Dark-Mode'
            $('.light-dark-toggle').children('span').last().text(' Dark-Mode');
            isModeLight = true;

        }
    });


});