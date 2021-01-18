$(document).ready(function (){

// checking account deposit

$('#checking-deposit').on('click', function () {
  const deposit = Number( $('#checking-amount').val() ); //getter
 
  const existingBalance = Number( $('#checking-balance').text().slice(1) );
  const newBalance = existingBalance + deposit;
  const otherBalance = Number( $('#total-savings').text().slice(1) );
  const totalBalance = otherBalance + newBalance;

  $('#checking-balance').text('$' + newBalance); //setter

});

// checking account withdraw

$('#checking-withdraw').on('click', function () {
  const withdraw = + $('#checking-amount').val(); //getter
 
  const existingBalance = + $('#checking-balance').text().slice(1);
  const newBalance = existingBalance - withdraw;
if (existingBalance < withdraw) {
    return;
  }
  $('#checking-balance').text('$' + newBalance); //setter

});

// saving amount deposit
$('#savings-deposit').on('click', function () {
  const deposit = + $('#amount-input').val(); //getter
 
  const existingBalance = + $('#total-savings').text().slice(1);
  const newBalance = existingBalance + deposit;

  $('#total-savings').text('$' + newBalance); //setter

});

// saving account withdraw

$('#savings-withdraw').on('click', function () {
  const withdraw = + $('#amount-input').val(); //getter
 
  const existingBalance = + $('#total-savings').text().slice(1);
  const newBalance = existingBalance - withdraw;
if (existingBalance < withdraw) {
    return;
  }
  $('#total-savings').text('$' + newBalance); //setter

});




});

// creating a checklist 
// the event that i am listening for - is the event of clicking
// clicking on the button - on the click - i want this to happen
// get the amount first = the value of the input
// add the amount to the display 

// get the current balance
// add deposit to the (current balance)
// and show the new balance 

