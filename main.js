// let btnPlus = document.getElementById('buttonPlus');
// let btnMinus = document.getElementById('buttonMinus');
// let btnMult = document.getElementById('buttonMult');
// let btnDivide = document.getElementById('buttonDivide');




var operationButtons = document.getElementsByClassName('operation-button');
// var operationButtons = [btnPlus, btnMinus, btnMult, btnDivide];

let input1 = document.getElementById('input1');
let input2 = document.getElementById('input2');


function makeOperation(operationCode) {

    var number1 = Number(input1.value);
    var number2 = Number(input2.value);
    // что делать
    if (operationCode === '+') {
        var result = number1 + number2;
    } else if (operationCode === '-') {
        var result = number1 - number2;
    } else if (operationCode === '*') {
        var result = number1 * number2;
    } else if (operationCode === '/') {
        var result = number1 / number2;
    } else {
        window.alert('Operation is unknown');
    }

    window.alert(result);
}

function onOperationButtonClick(eventObject) {
    var clickedElement = eventObject.currentTarget;
    var operation = clickedElement.innerHTML;
    makeOperation(operation);
    //  с кем делать
}







for (var i = 0; i < operationButtons.length; i++) {
    var button = operationButtons[i];
    button.addEventListener('click', onOperationButtonClick);
    // сколько раз делать (4)
}


            // замена for
// operationButtons[0].addEventListener('click', onOperationButtonClick);
// operationButtons[1].addEventListener('click', onOperationButtonClick);
// operationButtons[2].addEventListener('click', onOperationButtonClick);
// operationButtons[3].addEventListener('click', onOperationButtonClick);



