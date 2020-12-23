//check account

// let totalCheck = 0;

// function deposit(value) {
//       totalCheck += value //addition assignment
// };
// function withdraw(value) {
//      totalCheck -= value //substitution assignment
// };

// deposit(15)
// withdraw(5)

// console.log(totalSavings);


$(document).ready(function(){



//saving account

//jquery

let savingsAmount = $('#savings-amount').val();
let savingsBalance = $('#savings-balance').val();

//

function deposit(savingsAmount) {
      savingsBalance += savingsAmount //addition assignment
};
function withdraw(savingsAmount) {
     savingsBalance -= savingsAmount //substitution assignment
};

deposit(15)
withdraw(5)

console.log('khastam kardi');

//

$("#savings-deposit").click(deposit)

//$("#savings-deposit").click(deposit);
// $('#savings-withdraw').click(withdraw);

});




//total money in the bank
// const totalMoney = totalCheck + totalSavings;



//
const checkingAmount = $('#checking-amount');



// dec - 53 [1000]
// jan - feb - mar - 53 [1300 | 1400 | 1500 | 1600 ]
// mar - 52.5 [1700 | 1200]
// apr - 51.5 [1200 | 1100]
// may - 50 [1100 | 1300]
// jun - jul - aug - 50 [1300 | 1400 | 1500 | 1600 ]

// calculator

let num1 = "";
let num2 = "";
let operator = "";
let total = "";

$(document).ready(function() {
    $('button').on('click', function(e) {
        let btn = e.target.innerHTML,
        if (btn >= '0' && btn <= '9'){
            handleOperator(btn);

        }
    });


function handleNumber(num) {
    if (num1 === '') {
        num1 = num; 
    } else {
        num2 = num;
    } displayButton(num);
};

function handleOperator(oper) {
    if (operator === '') {
        operator = oper;

    } else {
        handleTotal();
        operator = oper;
    }
};

function handleTotal() {
    switch(operator) {
        case '+': 
            total = +num1 + +num2;
            displayButton(total);

        break;
        case '-':
            total = +num1 - +num2;
            displayButton(total);

        break;
        case '/':
            total = +num1 / +num2;
            displayButton(total);

        break;
        case '*':
            total = +num1 * +num2;
            displayButton(total);
        
        break;
        } updateVariables();
};

function displayButton(btn) {
    $('.calc-result-input').text(btn);
};

function updateVariables() {
    num1 = total; num2 = '';
};



});
