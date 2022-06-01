import converterData from './data.js';

function createDropDowns() {
    const converterFrom = document.getElementById('convertFrom')
    const converterTo = document.getElementById('convertTo')

    // добавлям дроп дауны для выбора юнитов конвертации
    // значение каждого элемента соответствует коэфициенту из входящих данных
    converterData.forEach(function (data) {
        // добавляем элемент к исходному юниту
        const optionFrom = document.createElement('option');
        optionFrom.value = data.distance.value;
        optionFrom.innerHTML = data.convert_to;
        converterFrom.appendChild(optionFrom);

        // добавляем элемент к результирующему юниту
        const optionTo = document.createElement('option');
        optionTo.value = data.distance.value;
        optionTo.innerHTML = data.convert_to;
        converterTo.appendChild(optionTo);
    });
}

function updateInput(numberFromId, convertFromId, numberToId, convertToId) {
    const numberFrom = document.getElementById(numberFromId).value;

    // если в инпуте нет числа - обнуляем другой инпут
    if (numberFrom === "") {
        document.getElementById(numberToId).value = "";
        return;
    }

    // что бы сконвертировть фиты в киллометры, нужно сначала фиты
    // перевести в метры а затем метры в киллометры. каждый дроп бокс
    // уже содержит нужные нам коэффициенты
    const divineBy = document.getElementById(convertFromId).value;
    const multiplyBy = document.getElementById(convertToId).value;

    const numberTo = (numberFrom * multiplyBy / divineBy).toFixed(2);
    document.getElementById(numberToId).value = numberTo;


    // выводим результат
    const select = document.getElementById('convertTo');
    const resultJSON = {
        unit: select.options[select.selectedIndex].text,
        value: document.getElementById('numberTo').value
    };
    // для наглядности вывожу результат в формате JSON под конвертором
    document.getElementById('result').innerHTML = JSON.stringify(resultJSON);
}

function updatedFrom() {
    // обновляем результирующее поле на основании инпута и выбраных юнитов
    updateInput('numberFrom', 'convertFrom', 'numberTo', 'convertTo');
}

function updatedTo() {
    // обновляем входной инпут если пользователь измен результирующий
    updateInput('numberTo', 'convertTo', 'numberFrom', 'convertFrom');
}

function addListeners() {
    document.getElementById('numberFrom').addEventListener('input', updatedFrom);
    document.getElementById('convertFrom').addEventListener('change', updatedFrom);
    document.getElementById('convertTo').addEventListener('change', updatedFrom);

    document.getElementById('numberTo').addEventListener('input', updatedTo);
}

createDropDowns();
addListeners();

export default {};
