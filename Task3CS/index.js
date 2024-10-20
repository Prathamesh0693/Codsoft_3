let display = document.getElementById('display');
let currentInput = '';
let operatorUsed = false;

// Function to append numbers to the display
function appendNumber(number) {
    if (operatorUsed) {
        operatorUsed = false;
    }
    currentInput += number;
    display.innerText = currentInput;
}

// Function to append operators to the display
function appendOperator(operator) {
    // Prevent multiple operators from being added consecutively
    if (currentInput === '' || operatorUsed) return;
    currentInput += operator;
    display.innerText = currentInput;
    operatorUsed = true;
}

// Function to clear the display
function clearDisplay() {
    currentInput = '';
    display.innerText = '0'; // Display zero when cleared
}

// Function to delete the last character in the current input
function deleteLast() {
    currentInput = currentInput.slice(0, -1);
    if (currentInput === '') {
        display.innerText = '0'; // Display zero when all characters are deleted
    } else {
        display.innerText = currentInput;
    }
}

// Function to evaluate the current input and display the result
function calculate() {
    try {
        // Ensure the input is valid for evaluation (no operators at the end)
        if (/[+\-*/]$/.test(currentInput)) {
            currentInput = currentInput.slice(0, -1); // Remove the last operator if it exists
        }

        // Evaluate the expression and display the result
        let result = eval(currentInput);

        display.innerText = result;
        currentInput = result.toString(); // Update the current input to the result
        operatorUsed = false;
    } catch (error) {
        display.innerText = 'Error';
        currentInput = ''; // Reset if there's an error
    }
}