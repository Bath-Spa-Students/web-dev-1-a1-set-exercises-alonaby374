//creating calculation function in JavaScript

function calc() {
    //setting variables for amount of gas and the price. 
    var volume = parseFloat(document.getElementById("vol").value);
    var petrol = parseFloat(document.getElementById("petPrice").value);
    
    
    //multiplying previous variable values to create total price variable.
    var totalPrice = petrol * volume;

    //Fetching total price variable and displaying it when button is pressed.
    document.getElementById("totalPrice").textContent = "Total Cost: " + totalPrice.toFixed(2) + "DHS";
}