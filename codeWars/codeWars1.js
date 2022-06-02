// Найдите числа, которые делятся на заданное число

function divisibleBy (numbers, divisor) {
    let newArr = [];
    numbers.forEach(item => {
        if(item % divisor === 0) {
            newArr.push(item)
        }
    })
    return newArr;
  }
  let res = divisibleBy([1, 2, 3, 4, 5, 6], 2);
  console.log(res);// получим 2,4,6

  // вар 2

  function divisibleBy2 (numbers, divisor) {
    return numbers.filter(item => item % divisor === 0);
  }

  let res2 = divisibleBy2([1, 2, 3, 4, 5, 6], 2);
  console.log(res2);// получим 2,4,6
