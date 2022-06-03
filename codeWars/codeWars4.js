// преобразовать строки в строку где каждое слово с большой буквы

// Пример:

// Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
// Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real"

function toJadenCase (str) {
    let array = str.toLowerCase().split(' ');
    let arr = array.map((item) => item[0].toUpperCase() + item.slice(1))
    return arr.join(' ');
  }
  console.log(toJadenCase("How can mirrors"));



//   describe("Tests", () => {
//     it("test", () => {
//   var str = "How can mirrors be real if our eyes aren't real";
//   Test.assertEquals(str.toJadenCase(), "How Can Mirrors Be Real If Our Eyes Aren't Real");
//     });
//   });