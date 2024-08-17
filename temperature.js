document.addEventListener('DOMContentLoaded', function() {
    const celsiusInput = document.getElementById('celsius');
    const fahrenheitInput = document.getElementById('fahrenheit');
    const kelvinInput = document.getElementById('kelvin');

    function calculateFromCelsius() {
        const celsius = parseFloat(celsiusInput.value);
        if (!isNaN(celsius)) {
            const fahrenheit = (celsius * 9/5) + 32;
            const kelvin = celsius + 273.15;
            fahrenheitInput.value = fahrenheit.toFixed(2);
            kelvinInput.value = kelvin.toFixed(2);
        } else {
            fahrenheitInput.value = '';
            kelvinInput.value = '';
        }
    }

    function calculateFromFahrenheit() {
        const fahrenheit = parseFloat(fahrenheitInput.value);
        if (!isNaN(fahrenheit)) {
            const celsius = (fahrenheit - 32) * 5/9;
            const kelvin = (fahrenheit + 459.67) * 5/9;
            celsiusInput.value = celsius.toFixed(2);
            kelvinInput.value = kelvin.toFixed(2);
        } else {
            celsiusInput.value = '';
            kelvinInput.value = '';
        }
    }

    function calculateFromKelvin() {
        const kelvin = parseFloat(kelvinInput.value);
        if (!isNaN(kelvin)) {
            const celsius = kelvin - 273.15;
            const fahrenheit = (kelvin * 9/5) - 459.67;
            celsiusInput.value = celsius.toFixed(2);
            fahrenheitInput.value = fahrenheit.toFixed(2);
        } else {
            celsiusInput.value = '';
            fahrenheitInput.value = '';
        }
    }

    celsiusInput.addEventListener('input', calculateFromCelsius);
    fahrenheitInput.addEventListener('input', calculateFromFahrenheit);
    kelvinInput.addEventListener('input', calculateFromKelvin);
});