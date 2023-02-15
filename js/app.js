function getPin () {
    const pin = generatePin();
    const pinString = pin + '';
    if (pinString.length === 4) {
        return pin;
    } else {
        return getPin();
    }

}

function generatePin () {
    const random = Math.round(Math.random() * 10000);
    return random;
}

document.getElementById('generate-pin').addEventListener('click', function () {
    const pin = getPin();
    const displayPinField = document.getElementById('display-pin');
    displayPinField.value = pin;
})

document.getElementById('calculator').addEventListener('click', function (event) {
    const number = event.target.innerText
    const typedNumberField = document.getElementById('typed-number');
    if (isNaN(number)) {
        if (number === 'C') {
            typedNumberField.value = '';
        } else if (number === '<') {
            const digits = typedNumberField.value.split('');
            digits.pop();
            const remainingDigits = digits.join('');
            typedNumberField.value = remainingDigits;
        }
    } else {
        typedNumberField.value += number;
    }
})

document.getElementById('check-match-pin').addEventListener('click', function () {
    const userInputPinEle = document.getElementById('typed-number');
    const userInputPin = userInputPinEle.value;
    const currentPin = document.getElementById('display-pin');
    const pin = currentPin.value;
    const messWrong = document.getElementById('pin-wrong');
    const messRight = document.getElementById('pin-success');
    if (userInputPin == pin) {
        messRight.style.display = 'block';
        messWrong.style.display = 'none';
        userInputPinEle.value = '';
        currentPin.value = '';
        
    } else {
        messWrong.style.display = 'block';
        messRight.style.display = 'none';
        userInputPinEle.value = '';
    }
})