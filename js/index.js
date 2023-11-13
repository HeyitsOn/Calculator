function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

// Function to clear the display
function clearDisplay() {
    document.getElementById('display').value = '';
}

// Function to calculate and display the result
function calculateResult() {
    var displayValue = document.getElementById('display').value;
    var result = eval(displayValue); // Note: Using eval can have security implications, consider using a safer alternative in a production environment
    document.getElementById('display').value = result;
}