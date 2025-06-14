function convertTemperature() {
      const temp = parseFloat(document.getElementById('temperature').value);
      const unit = document.querySelector('input[name="unit"]:checked').value;
      const result = document.getElementById('result');

      if (isNaN(temp)) {
        result.textContent = "Please enter a valid number.";
        return;
      }

      let output = "";
      if (unit === "celsius") {
        output = `Fahrenheit: ${(temp * 9/5 + 32).toFixed(2)} °F | Kelvin: ${(temp + 273.15).toFixed(2)} K`;
      } else if (unit === "fahrenheit") {
        output = `Celsius: ${((temp - 32) * 5/9).toFixed(2)} °C | Kelvin: ${(((temp - 32) * 5/9) + 273.15).toFixed(2)} K`;
      } else if (unit === "kelvin") {
        output = `Celsius: ${(temp - 273.15).toFixed(2)} °C | Fahrenheit: ${((temp - 273.15) * 9/5 + 32).toFixed(2)} °F`;
      }

      result.textContent = output;
    }