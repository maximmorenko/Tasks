// Создайте функцию truncate(str, maxlength), которая проверяет длину строки str и, 
// если она превосходит maxlength, заменяет конец str на "…", так, чтобы её длина стала равна maxlength.

// Результатом функции должна быть та же строка, если усечение не требуется, либо, 
// если необходимо, усечённая строка.

// Например:
// truncate("Вот, что мне хотелось бы сказать на эту тему:", 20) = "Вот, что мне хотело…"
// truncate("Всем привет!", 20) = "Всем привет!"

function truncate (str, maxlength) {
    if (str.length <= maxlength){
        return str;
    }
    else {
        return str.split('').splice(0, 20).join('');
    }
}
let result = truncate("Вот, что мне хотелось бы сказать на эту тему:", 20);
console.log(result);

// задача 2
// удаляем первый элемент из строки

function truncate2 (str) {  
        //return str.split('').splice(0, 20).join('');
        return str.slice(1)
}
let result2 = truncate2("$123");
console.log(result2);