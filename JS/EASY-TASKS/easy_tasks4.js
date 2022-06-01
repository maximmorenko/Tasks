// Вернуть массив, состоящий из наибольших чисел каждого вложенного массива. 
// Для простоты предоставленный массив будет содержать ровно 4 вложенных массива.

let arr = [[1,2,3,4], [5,18,0,12], [3,5,12,5], [28,9,2,34]];
//должны получить [4,18,12,34]

// вар 1
function findMaxNumArr(params) {
    return params.map(subarr => Math.max(...subarr));
}
console.log(findMaxNumArr(arr)); // получим [4,18,12,34]

// вар 2
// вариант с циклом for
function largestOfFour(arr) {
    let arrayOfMaxValues = [];
    for (let i = 0; i < arr.length; i++) {
        let subArr = arr[i];
        let maxSubArrVal = 0;
        for (let j = 0; j < subArr.length; j++) {
            let currentValue = subArr[j];
            if (currentValue > maxSubArrVal) {
              maxSubArrVal = currentValue;
            }
        }
        arrayOfMaxValues.push(maxSubArrVal);
    }
    return  arrayOfMaxValues;
  }
  console.log(largestOfFour(arr));
  
  // вариант с forEach
  function largestOfFour2(arr) {
    let arrayOfMaxValues = [];
    arr.forEach(subArr => {
       let maxSubArrVal = 0;
       subArr.forEach(item => {
          if (item > maxSubArrVal) {
              maxSubArrVal = item;
          }
       });
       arrayOfMaxValues.push(maxSubArrVal);
    });
    return  arrayOfMaxValues;
  }
  
  console.log(largestOfFour2(arr));