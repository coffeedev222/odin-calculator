let number1 = 2;
let number2 = 5;
let operator = addition;

function addition(num1, num2) {
    sum = num1 + num2;
    return sum;
}

function subtraction(num1, num2) {
    diff = num1 - num2;
    return diff;
}

function multiplication(num1, num2) {
    product = num1 * num2;
    return product;
}

function division(num1, num2) {
    quotient = num1 / num2;
    return quotient;
}

function operate() {
    answer = operator(number1, number2);
    return answer;
}