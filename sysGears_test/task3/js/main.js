import questions from './questions.js';

// хранит серию вопросов и ответов
const path = [];
// количество возможных вариантов вопросов и ответов
let totalPaths = 0;

// создаем мап айди к объекту с вопросом и ответами, чтобы
// проще переходить к следующему вопросу
const idToQuestion = new Map();
questions.forEach(function (question) {
  idToQuestion.set(question.id, question.Q)
});

let finalAnswer = {paths: {
  number: 0,
  list: []
}};

function addResult() {
  ++totalPaths;
  console.log(JSON.stringify(path));

  finalAnswer.paths.number = totalPaths;
  finalAnswer.paths.list.push([...path]);
}

// используем рекурсию. getAnswer проходит через все возможные варианты вопросов и ответов.

// 1. если не один из ответов на вопрос не имеет переходов к следующим вопросам,
//    то он является последним в цепочке и мы сохраняем его в формате
//    "вопрос" "ответ1/ответ2/..ответN"

// 2. если хотя бы один из ответов имеет переход к следующему вопросу, а текущий вопрос
//    не имеет перехода, то это тоже конец цепочки, но ответ сохраняется в виде
//    "вопрос" "ответ1" (где ответ1 не имеет переходов дальше)

// 3. для ответа, который содержит ай ди для следующего вопроса - мы извлекам вопрос из мапы
//    и вызываем для него функцию getAnswer, таким образом мы обойдем все варианты переходов между
//    вопросами

function getAnswer(question) {
  const questionText = question.text;
  let allAnswersText = '';
  let isLastNode = true;

  question.answers.forEach(function (answer) {
    // собираем ответы в одну строчку ответ1/ответ2... на случай
    // если это тупиквый вопрос для случая 1)
    allAnswersText += answer.text + '/';
    if (answer.nextQ) {
      isLastNode = false;
    }
  });

  allAnswersText = allAnswersText.slice(0, -1);

  // последний вопрос 1)
  if (isLastNode) {
    //++totalPaths;

    let questionWithAnswer = {};
    questionWithAnswer[questionText] = allAnswersText;

    // добавляем ответ в путь, просто чтобы удобней вывести его в консоль
    path.push(questionWithAnswer);
    addResult();
    //console.log(JSON.stringify(path));
    // убираем последний элемент из пути и возвращаемся на уровень выше
    path.pop();
    return;
  }

  question.answers.forEach(function (answer) {
    // добавляем текущий вопрос с ответом в цепочку
    let questionWithAnswer = {};
    questionWithAnswer[questionText] = answer.text;
    path.push(questionWithAnswer);

    // если есть следующий впорос, выполняем его обход
    if (answer.nextQ) {
      getAnswer(idToQuestion.get(answer.nextQ));
    } else {
      // если следующего вопроса нет, то это пункт 2)
      //++totalPaths;
      addResult();
      //console.log(JSON.stringify(path));
    }
    // удаляем текущий вопрос с ответом из цепочки
    path.pop();
  });
}

getAnswer(idToQuestion.get(0));

console.log('total paths: ' + totalPaths);

console.log('');
console.log('');

console.log('Answer: ' + JSON.stringify(finalAnswer, null, '\t'));

export default {};
