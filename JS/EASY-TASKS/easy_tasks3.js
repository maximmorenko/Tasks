// Вернуть длину самого длинного слова в проверяемом предложении.
// вар 1
function findlongestWord (str) {
    let longestWord = 0;
    const arr = str.split(' ');

    arr.forEach(word => {
        if (word.length > longestWord){
            longestWord = word.length
        }
    });
    return longestWord;
}
console.log(findlongestWord ('привет как дела'));

// Решение с использованием цикла for
function findLongestWordLength(str) {
    let maxVal = 0;
  
    const wordArr = str.split(' ');
  
    for(let i = 0; i < wordArr.length; i++) {
        let word = wordArr[i];
        if (word.length > maxVal) {
            maxVal = word.length;
        }
    }
    return maxVal;
  }

// вар 3
// Для каждого элемента в массиве вернём длину строки и сохраним её в новом массиве под названием arrOfLengths.
// Наконец, мы можем использовать метод Math.max(...spreadOperator) с оператором spread для того, 
// чтобы вернуть целочисленное значение для самой длинной строки в предложении.

  function findLongestWordLength2(str) {
    const arrOfWords = str.split(' ');
    const arrOfLengths = arrOfWords.map(item => item.length);
  
    return Math.max(...arrOfLengths);
  }

  // Вернуть самое длинное слово в проверяемом предложении.

  function findLongestWordLength3(str) {
    let maxVal = '';
  
    const wordArr = str.split(' ');
  
    for(let i = 0; i < wordArr.length; i++) {
        let word = wordArr[i];
        if (word.length > maxVal.length) {
            maxVal = word;
        }
    }
    return maxVal;
  }
  console.log(findLongestWordLength3 ('привет как дела'));