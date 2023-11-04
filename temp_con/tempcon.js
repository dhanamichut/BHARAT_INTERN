

function convertToCelsius() {
   
    var celsius = parseFloat(document.getElementById("inputCelsius").value);

   
    if (!isNaN(celsius)) {
        
        var fahrenheit = (celsius * 9/5) + 32;

        
        var resultElement = document.getElementById("result");
        
     
        resultElement.textContent = celsius + " Celsius is " + fahrenheit.toFixed(2) + " Fahrenheit";
        resultElement.style.color = "black"; 
    } else {
        document.getElementById("result").textContent = "Please enter a valid temperature in Celsius.";
    }
}

document.querySelector("button").addEventListener("click", convertToCelsius);




















