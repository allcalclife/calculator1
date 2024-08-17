document.addEventListener('DOMContentLoaded', function() {
    console.log('DOMContentLoaded event fired 시작합니다.');
    const leftInput = document.getElementById('leftInput');
    const rightInput = document.getElementById('rightInput');
    const leftUnitGroup = document.getElementById('leftUnitGroup');
    const rightUnitGroup = document.getElementById('rightUnitGroup');
    let conversionData;
    let unitType; // unitType 변수를 정의하지만 초기화하지 않음
    console.log('Leftinput은', leftInput, 'Rightinput은', rightInput, '입니다');
    console.log('leftunitgroup은', leftUnitGroup, 'rightunitgroup은', rightUnitGroup, '입니다.');

    function getQueryParam(param) {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get(param);
    }

    function loadUnits(unitType) {
        console.log('loadUnits function called with unitType(유닛타입):', unitType);
        if (!conversionData || !conversionData[unitType]) {
            console.error('Conversion data is not available for unitType:', unitType);
            return;
        }
        const units = conversionData[unitType].units;
        leftUnitGroup.innerHTML = '';
        rightUnitGroup.innerHTML = '';

        units.forEach(unit => {
            const leftLabel = document.createElement('label');
            leftLabel.innerHTML = `<span>${unit}</span>`;
            leftUnitGroup.appendChild(leftLabel);

            const rightLabel = document.createElement('label');
            rightLabel.innerHTML = `<span>${unit}</span>`;
            rightUnitGroup.appendChild(rightLabel);
        });
        console.log('Units loaded:', units);

        // 클릭 이벤트 추가
        addClickEventToUnits();
    }

    function addClickEventToUnits() {
        const leftUnits = leftUnitGroup.getElementsByTagName('span');
        const rightUnits = rightUnitGroup.getElementsByTagName('span');

        Array.from(leftUnits).forEach(span => {
            span.addEventListener('click', function() {
                clearSelected(leftUnits);
                this.classList.add('selected');
                convert();
            });
        });

        Array.from(rightUnits).forEach(span => {
            span.addEventListener('click', function() {
                clearSelected(rightUnits);
                this.classList.add('selected');
                convert();
            });
        });
    }

    function clearSelected(units) {
        Array.from(units).forEach(unit => {
            unit.classList.remove('selected');
        });
    }

    function getSelectedUnit(unitElements) {
        for (const unit of unitElements) {
            if (unit.classList.contains('selected')) {
                return unit.textContent;
            }
        }
        return null;
    }

    function convert() {
        const leftValue = parseFloat(leftInput.value);
        const leftUnit = getSelectedUnit(leftUnitGroup.getElementsByTagName('span'));
        const rightUnit = getSelectedUnit(rightUnitGroup.getElementsByTagName('span'));

        if (!isNaN(leftValue) && leftUnit && rightUnit) {
            let rightValue;

            // 단위 변환 로직
            const conversionRates = conversionData[unitType].conversionRates;
            rightValue = leftValue * (conversionRates[rightUnit] / conversionRates[leftUnit]);

            rightInput.value = rightValue.toPrecision(5); // 유효숫자 5자리로 출력
            console.log(`Converted ${leftValue} ${leftUnit} to ${rightValue} ${rightUnit}`);
        } else {
            rightInput.value = '';
            console.log('Invalid input or units not selected');
        }
    }

    leftInput.addEventListener('input', convert);
    document.addEventListener('change', convert);

    fetch('units.json')
        .then(response => {
            console.log('Fetch request for units.json made');
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            console.log('units.json loaded successfully');
            conversionData = data;
            console.log('Data loaded:', data);
            // URL 파라미터에서 unitType을 읽어 설정
            unitType = getQueryParam('unitType') || Object.keys(conversionData)[0];
            loadUnits(unitType);
        })
        .catch(error => {
            console.error('Error loading units:', error);
        });
});