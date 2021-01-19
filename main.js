var btnPlus = document.getElementById('buttonPlus');
var btnMinus = document.getElementById('buttonMinus');
var btnMult = document.getElementById('buttonMult');
var btnDivide = document.getElementById('buttonDivide');


function onButtonPlusClick() {
    var input1 = document.getElementById('number1');
    var input2 = document.getElementById('number2');

    var number1 = Number(input1.value);
    var number2 = Number(input2.value);

    var summ = number1 + number2;
    window.alert(summ);
}

function onButtonMinusClick() {
    var input1 = document.getElementById('number1');
    var input2 = document.getElementById('number2');

    var number1 = Number(input1.value);
    var number2 = Number(input2.value);

    var summ = number1 - number2;
    window.alert(summ);
}
function onButtonMultiplyClick() {
    var input1 = document.getElementById('number1');
    var input2 = document.getElementById('number2');

    var number1 = Number(input1.value);
    var number2 = Number(input2.value);

    var summ = number1 * number2;
    window.alert(summ);
}
function onButtonDivideClick() {
    var input1 = document.getElementById('number1');
    var input2 = document.getElementById('number2');

    var number1 = Number(input1.value);
    var number2 = Number(input2.value);

    var summ = number1 / number2;
    window.alert(summ);
}




btnPlus.addEventListener('click', onButtonPlusClick);
btnMinus.addEventListener('click', onButtonMinusClick);
btnMult.addEventListener('click', onButtonMultiplyClick);
btnDivide.addEventListener('click', onButtonDivideClick);




