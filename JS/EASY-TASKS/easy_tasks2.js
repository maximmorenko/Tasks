// Сделать первый символ заглавным
function ucFirst(str) {
    // сделаем проверку на случай если аргумент не строка
    if (!str) return str;
    return str[0].toUpperCase() + str.slice(1);
  }
  console.log(ucFirst("вася")); // Вася
  
  // Либо использовать str.charAt(0), 
  // поскольку этот метод всегда возвращает строку (для пустой строки — пустую).

  function ucFirst2(str) {
    // сделаем проверку на случай если аргумент не строка
    if (!str) return str.charAt(0);
    return str[0].toUpperCase() + str.slice(1);
  }
  
  console.log(ucFirst2("петя")); // Петя