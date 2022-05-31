// Получив строку, необходимо развернуть её.
// вар 1
function reverseString(str) {
    return str.split('').reverse().join('');
  }
console.log(reverseString('мискам')); // получим "максим"


// вар 2

function reverseString2(str) {
  let reversedString2 = '';

 /* с помощью цикла проходим по каждому элементу str
Чтобы развернуть строку мы присваиваем переменной i значение str.length-1 в то время, как i больше или равно 0.

Добавляем каждый символ, начиная с конца, в новую строку
 */
  for (let i = str.length-1; i >= 0; i--) {
      reversedString2 += str.charAt(i);

  }
  return reversedString2;
}