document.addEventListener('DOMContentLoaded', function() {
    const heightInput = document.getElementById('height');
    const weightInput = document.getElementById('weight');
    const bmiOutput = document.getElementById('bmi');

    function calculateBMI() {
        const height = parseFloat(heightInput.value) / 100; // cm to meters
        const weight = parseFloat(weightInput.value);

        if (!isNaN(height) && !isNaN(weight) && height > 0) {
            const bmi = weight / (height * height);
            bmiOutput.value = bmi.toFixed(1);
        } else {
            bmiOutput.value = '';
        }
    }

    heightInput.addEventListener('input', calculateBMI);
    weightInput.addEventListener('input', calculateBMI);
});