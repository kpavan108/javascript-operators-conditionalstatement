// Define a function to multiply two numbers and display the result
const multiplyBy = () => {
    // Get the value entered in the input field with the id "firstNumber"
    const num1 = document.getElementById("firstNumber").value;
    // Get the value entered in the input field with the id "secondNumber"
    const num2 = document.getElementById("secondNumber").value;

    // Set the inner HTML of the element with the id "result" to the product of the two numbers
    document.getElementById("result").innerHTML = num1 * num2;
};

// Define a function to divide two numbers and display the result
const divideBy = () => { 
    // Get the value entered in the input field with the id "firstNumber"
    const num1 = document.getElementById("firstNumber").value;
    // Get the value entered in the input field with the id "secondNumber"
    const num2 = document.getElementById("secondNumber").value;

    // Set the inner HTML of the element with the id "result" to the quotient of the two numbers
    document.getElementById("result").innerHTML = num1 / num2;
}; 
