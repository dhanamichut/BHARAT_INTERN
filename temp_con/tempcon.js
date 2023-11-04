

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




















/*

function convertToCelsius() {
    var input = document.getElementById("inputCelsius").value;
    


    var celsius = parseFloat(input);
    var fahrenheit = (celsius * 9/5) + 32;

    document.getElementById("result").innerHTML = celsius + "°C which is equal to " + fahrenheit + "°F";

function convertTemperature() {
    const inputTemp = parseFloat(document.getElementById('inputTemp').value);
    const fromUnit = document.getElementById('fromUnit').value;
    const toUnit = document.getElementById('toUnit').value;

    if (fromUnit === toUnit) {
        document.getElementById('result').innerHTML = "Please select different units.";
        return;
    }

    let result;

    if (fromUnit === 'celsius' && toUnit === 'fahrenheit') {
        result = (inputTemp * 9/5) + 32;
    } else if (fromUnit === 'fahrenheit' && toUnit === 'celsius') {
        result = (inputTemp - 32) * 5/9;
    }

    document.getElementById('result').innerHTML = `${inputTemp} ${fromUnit} is ${result.toFixed(2)} ${toUnit}`;
}
/*
function convertTemperature() {
    const temperatureInput = parseFloat(document.getElementById("temperature").value);
    const fromUnit = document.getElementById("fromUnit").value;
    const resultElement = document.getElementById("result");
    
    if (isNaN(temperatureInput)) {
        resultElement.textContent = "Please enter a valid number.";
        return;
    }

    let convertedTemperature;
    if (fromUnit === "celsius") {
        convertedTemperature = {
            fahrenheit: (temperatureInput * 9/5) + 32,
            kelvin: temperatureInput + 273.15
        };
    } else if (fromUnit === "fahrenheit") {
        convertedTemperature = {
            celsius: (temperatureInput - 32) * 5/9,
            kelvin: (temperatureInput - 32) * 5/9 + 273.15
        };
    } else if (fromUnit === "kelvin") {
        convertedTemperature = {
            celsius: temperatureInput - 273.15,
            fahrenheit: (temperatureInput - 273.15) * 9/5 + 32
        };
    }

    resultElement.textContent = `Converted Temperature:
    Celsius: ${convertedTemperature.celsius} °C,
    Fahrenheit: ${convertedTemperature.fahrenheit} °F,
    Kelvin: ${convertedTemperature.kelvin} K`;
}*/