// Implement Arithmetic Functions

// Declare Add Function
function add(number1, number2){
    return number1 + number2;
}

// Declare Subtract Function
function subtract(number1, number2){
    return number1 - number2;
}

// Declare Multiply Function
function multiply(number1, number2){
    return number1 * number2;
}

// Declare Divide Function
function divide(number1, number2){
    return number1 / number2;
}

// Attach Event Listener to the Add function
document.getElementById('add').addEventListener('click', function(){
    const number1 = parseFloat(document.getElementById('number1').value) || 0;
    const number2 = parseFloat(document.getElementById('number2').value) || 0;
    const result = add(number1, number2);
    document.getElementById('calculation-result').textContent = result;
});

// Attach Event Listener to the Subtract function
document.getElementById('subtract').addEventListener('click', function(){
    const number1 = parseFloat(document.getElementById('number1').value) || 0;
    const number2 = parseFloat(document.getElementById('number2').value) || 0;
    const result = subtract(number1, number2);
    document.getElementById('calculation-result').textContent = result;
});

// Attach Event Listener to the Multiply function
document.getElementById('multiply').addEventListener('click', function(){
    const number1 = parseFloat(document.getElementById('number1').value) || 0;
    const number2 = parseFloat(document.getElementById('number2').value) || 0;
    const result = multiply(number1, number2);
    document.getElementById('calculation-result').textContent = result;
});

// Attach Event Listener to the Divide function
document.getElementById('divide').addEventListener('click', function(){
    const number1 = parseFloat(document.getElementById('number1').value) || 0;
    const number2 = parseFloat(document.getElementById('number2').value) || 0;
    const result = divide(number1, number2);
    document.getElementById('calculation-result').textContent = result;
});