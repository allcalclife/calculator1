document.addEventListener('DOMContentLoaded', function() {
    const vitaminA_IU = document.getElementById('vitaminA_IU');
    const vitaminA_mg = document.getElementById('vitaminA_mg');
    const vitaminB12_IU = document.getElementById('vitaminB12_IU');
    const vitaminB12_ug = document.getElementById('vitaminB12_ug');
    const vitaminD_IU = document.getElementById('vitaminD_IU');
    const vitaminD_ug = document.getElementById('vitaminD_ug');
    const vitaminE_IU = document.getElementById('vitaminE_IU');
    const vitaminE_mg = document.getElementById('vitaminE_mg');
    const resetButton = document.getElementById('resetButton');

    let debounceTimer;

    function debounce(func, delay) {
        return function() {
            clearTimeout(debounceTimer);
            debounceTimer = setTimeout(func, delay);
        }
    }

    function convertVitaminA() {
        const iu = parseFloat(vitaminA_IU.value);
        const mg = parseFloat(vitaminA_mg.value);
        if (!isNaN(iu)) {
            vitaminA_mg.value = (iu * 0.3 / 1000).toFixed(3); // IU to mg
        } else if (!isNaN(mg)) {
            vitaminA_IU.value = (mg / 0.3 * 1000).toFixed(3); // mg to IU
        }
    }

    function convertVitaminB12() {
        const iu = parseFloat(vitaminB12_IU.value);
        const ug = parseFloat(vitaminB12_ug.value);
        if (!isNaN(iu)) {
            vitaminB12_ug.value = (iu * 1).toFixed(3); // IU to µg
        } else if (!isNaN(ug)) {
            vitaminB12_IU.value = (ug / 1).toFixed(3); // µg to IU
        }
    }

    function convertVitaminD() {
        const iu = parseFloat(vitaminD_IU.value);
        const ug = parseFloat(vitaminD_ug.value);
        if (!isNaN(iu)) {
            vitaminD_ug.value = (iu * 0.025).toFixed(3); // IU to µg
        } else if (!isNaN(ug)) {
            vitaminD_IU.value = (ug / 0.025).toFixed(3); // µg to IU
        }
    }

    function convertVitaminE() {
        const iu = parseFloat(vitaminE_IU.value);
        const mg = parseFloat(vitaminE_mg.value);
        if (!isNaN(iu)) {
            vitaminE_mg.value = (iu * 0.67).toFixed(3); // IU to mg
        } else if (!isNaN(mg)) {
            vitaminE_IU.value = (mg / 0.67).toFixed(3); // mg to IU
        }
    }

    function resetFields() {
        vitaminA_IU.value = '';
        vitaminA_mg.value = '';
        vitaminB12_IU.value = '';
        vitaminB12_ug.value = '';
        vitaminD_IU.value = '';
        vitaminD_ug.value = '';
        vitaminE_IU.value = '';
        vitaminE_mg.value = '';
    }

    vitaminA_IU.addEventListener('input', debounce(convertVitaminA, 500));
    vitaminA_mg.addEventListener('input', debounce(convertVitaminA, 500));
    vitaminB12_IU.addEventListener('input', debounce(convertVitaminB12, 500));
    vitaminB12_ug.addEventListener('input', debounce(convertVitaminB12, 500));
    vitaminD_IU.addEventListener('input', debounce(convertVitaminD, 500));
    vitaminD_ug.addEventListener('input', debounce(convertVitaminD, 500));
    vitaminE_IU.addEventListener('input', debounce(convertVitaminE, 500));
    vitaminE_mg.addEventListener('input', debounce(convertVitaminE, 500));
    resetButton.addEventListener('click', resetFields);
});