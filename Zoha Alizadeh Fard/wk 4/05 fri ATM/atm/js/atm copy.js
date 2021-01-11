$(document).ready(function (){

// creating variables

$('#checking-deposit').on('click', function (){
  const checkingAmount = $('#checking-amount').val();
  $('#checking-balance').text('$' + checkingAmount);
   
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

