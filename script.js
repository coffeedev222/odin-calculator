let number1 = '';
let operator = '';
let answer = '';

const buttons = document.querySelectorAll('.sub-row');
let screen = document.getElementById('calc-screen');

buttons.forEach(button => {
    button.addEventListener('click', (event) => {
         clickedText = event.target.value;
         checkNumber();
     })
})

function addition(num1, num2) {
    num1.toFixed(7);
    num2.toFixed(7);
    sum = num1 + num2;
    return sum;
}

function subtraction(num1, num2) {
    num1.toFixed(7);
    num2.toFixed(7);
    diff = num1 - num2;
    return diff;
}

function multiplication(num1, num2) {
    num1.toFixed(7);
    num2.toFixed(7);
    console.log(num1);
    product = num1 * num2;
    return product;
}

function division(num1, num2) {
    num1.toFixed(7);
    num2.toFixed(7);
    if(num2 === '0') {
        console.log('cant divide by 0');
    }
    else {
        quotient = num1 / num2;
        return quotient;
    }
}

function remainder(num1, num2) {
    num1.toFixed(7);
    num2.toFixed(7);
    remainder = num1 % num2;
    return remainder;
}

function specialOperator() {
    if(clickedText === 'AE') {
        answer = '';
        number1 = '';
        operator = '';
        screen.innerHTML = '0';
        console.log('clear clicked');
    }
    else if(clickedText === "+/-") {
        answer = answer * -1;
        console.log('answer is ' + answer);
        screen.innerHTML = answer;
        number1 = '';
    }
    else if(clickedText === '.' && number1 === '') {
        if(answer % 1 === 0) {
            answer = answer + '.';
            screen.innerHTML = answer;
            console.log(answer);
        }
    }
    else if(clickedText === '.') {
        if(number1 % 1 === 0) {
            number1 = number1 + '.';
            screen.innerHTML = number1;
            console.log(number1);
        }
    }
    else if(operator === '') {
        operator = clickedText;
        console.log('special part1: ' + operator);
    }
    else if(operator != '') {
        console.log("operator is not empty" + operator + clickedText);
        operate();
        operator = clickedText;
    }
}

function operate() {
    if(operator === '+') {
        answer = addition(answer, number1);
        screen.innerHTML = answer;
        number1 = '';      
    }
    else if(operator === '-') {
        answer = subtraction(answer, number1);
        screen.innerHTML = answer;
        number1 = '';
    }
    else if(operator === '/') {
        answer = division(answer, number1);
        screen.innerHTML = answer;
        number1 = '';
    }
    else if(operator === '*') {
        answer = multiplication(answer, number1);
        screen.innerHTML = answer;
        number1 = '';
    }
    else if(operator === '%') {
        answer = remainder(answer, number1);
        screen.innerHTML = answer;
        number1 = '';
    }
}

function checkNumber() {
    if(parseFloat(clickedText) >= 0 && operator === '') {
        if(answer < 99999999) {
            answer = answer + clickedText;
            answer = parseFloat(answer);
            screen.innerHTML = answer;
        }
    }
    else if(isNaN(clickedText)) {
            specialOperator();
    }
    else if(number1 < 99999999) {
        number1 = number1 + clickedText;
        number1 = parseFloat(number1);
        screen.innerHTML = number1;
    }
}