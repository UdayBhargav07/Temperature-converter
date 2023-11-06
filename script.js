// Get input elements and output spans
const celsiusInput = document.getElementById("celsius");
const inputScaleSelect = document.getElementById("input-scale");
const outputScaleSelect = document.getElementById("output-scale");
const celsiusOutput = document.getElementById("celsius-output");
const fahrenheitOutput = document.getElementById("fahrenheit-output");
const kelvinOutput = document.getElementById("kelvin-output");

// Function to convert temperatures
function convertTemperatures() {
  const inputTemperature = parseFloat(celsiusInput.value);
  const inputScale = inputScaleSelect.value;
  const outputScale = outputScaleSelect.value;

  if (inputScale === "celsius") {
    if (outputScale === "fahrenheit") {
      const fahrenheit = (inputTemperature * 9/5) + 32;
      fahrenheitOutput.textContent = fahrenheit.toFixed(2);
      kelvinOutput.textContent = (inputTemperature + 273.15).toFixed(2);
    } else if (outputScale === "kelvin") {
      celsiusOutput.textContent = inputTemperature.toFixed(2);
      fahrenheitOutput.textContent = ((inputTemperature * 9/5) + 32).toFixed(2);
      kelvinOutput.textContent = (inputTemperature + 273.15).toFixed(2);
    } else {
      // If output scale is also Celsius, just update the value
      celsiusOutput.textContent = inputTemperature.toFixed(2);
      fahrenheitOutput.textContent = ((inputTemperature * 9/5) + 32).toFixed(2);
      kelvinOutput.textContent = (inputTemperature + 273.15).toFixed(2);
    }
  } else if (inputScale === "fahrenheit") {
    if (outputScale === "celsius") {
      celsiusOutput.textContent = ((inputTemperature - 32) * 5/9).toFixed(2);
      kelvinOutput.textContent = ((inputTemperature - 32) * 5/9 + 273.15).toFixed(2);
      fahrenheitOutput.textContent = inputTemperature.toFixed(2);
    } else if (outputScale === "kelvin") {
      celsiusOutput.textContent = ((inputTemperature - 32) * 5/9).toFixed(2);
      kelvinOutput.textContent = ((inputTemperature - 32) * 5/9 + 273.15).toFixed(2);
      fahrenheitOutput.textContent = inputTemperature.toFixed(2);
    } else {
      celsiusOutput.textContent = ((inputTemperature - 32) * 5/9).toFixed(2);
      kelvinOutput.textContent = ((inputTemperature - 32) * 5/9 + 273.15).toFixed(2);
      fahrenheitOutput.textContent = inputTemperature.toFixed(2);
    }
  } else if (inputScale === "kelvin") {
    if (outputScale === "celsius") {
      celsiusOutput.textContent = (inputTemperature - 273.15).toFixed(2);
      fahrenheitOutput.textContent = ((inputTemperature - 273.15) * 9/5 + 32).toFixed(2);
      kelvinOutput.textContent = inputTemperature.toFixed(2);
    } else if (outputScale === "fahrenheit") {
      celsiusOutput.textContent = (inputTemperature - 273.15).toFixed(2);
      fahrenheitOutput.textContent = ((inputTemperature - 273.15) * 9/5 + 32).toFixed(2);
      kelvinOutput.textContent = inputTemperature.toFixed(2);
    } else {
      celsiusOutput.textContent = (inputTemperature - 273.15).toFixed(2);
      fahrenheitOutput.textContent = ((inputTemperature - 273.15) * 9/5 + 32).toFixed(2);
      kelvinOutput.textContent = inputTemperature.toFixed(2);
    }
  }
}

const inputElement = document.getElementById('celsius');

inputElement.addEventListener('input', () => {
  if (inputElement.value) {
    inputElement.style.fontWeight = 'bold';
  } else {
    inputElement.style.fontWeight = 'normal';
  }
});

const outputElements = document.querySelectorAll('.output-group span');

outputElements.forEach(outputElement => {
  outputElement.addEventListener('DOMSubtreeModified', () => {
    if (outputElement.textContent) {
      outputElement.style.fontWeight = 'bold';
    } else {
      outputElement.style.fontWeight = 'normal';
    }
  });
});


// Add an event listener to the Convert button
document.querySelector("button").addEventListener("click", convertTemperatures);
