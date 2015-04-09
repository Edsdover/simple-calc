'use strict';

//Waits for Doc to be ready before running functions.
$(document).ready(init);

//
function init(){
  $('.number').click(clickNumber);
  $('#decimal').click(clickDecimal);
  $('#display').click(clickDisplay);
  $('.operator').click(clickOperator);
  $('#return').click(clickReturn);

}

//Grabs the value from the HTML click
//Prints value to the display
//Displays 0 unless a value other than 0 has been called.
//Prints value of output to the display and adds following values.
function clickNumber(){
  var num = $(this).text();
  var display = $('#display').text();
  var output = (display === '0') ? num : display + num;
  $('#display').text(output);
}

function clickDecimal(){
  var display = $('#display').text();
  var newText = (display.indexOf('.') === -1) ? (display + '.') : display;
  $('#display').text(newText);
}

function clickDisplay(){
  $('#display').text('0');
  storedNumber = parseFloat($('#display').text());
}

function clickOperator(){
  var operator = $(this).text();
  switch(operatorSwitch){
    case "+":
      var sum = #display +
  }
  $('#display').text('0');
}
