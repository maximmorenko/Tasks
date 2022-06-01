// каждому вопросу присваеваем ай ди, чтобы можно было организовать связь
// между ответом и следующим вопросом

// впорос содержит сам вопрос и список возможных ответов.
// каждый ответ в свою очередь может может содеражать ссылку на следующий впрос
// nextQ: id
const questions = [
  {
    id: 0,
    Q: {
      text: "What is your marital status?",
      answers: [
        {text: "Single", nextQ: 1},
        {text: "Married", nextQ: 2}
      ]
    }
  },
  {
    id: 1,
    Q: {
      text: "Are you planning on getting married next year?",
      answers: [
        {text: "Yes"},
        {text: "No"}
      ]
    }
  },
  {
    id: 2,
    Q: {
      text: "How long have you been married?",
      answers: [
        {text: "Less than a year"},
        {text: "More than a year", nextQ: 3}
      ]
    }
  },
  {
    id: 3,
    Q: {
      text: "Have you celebrated your one year anniversary?",
      answers: [
        {text: "Yes"},
        {text: "No"}
      ]
    }
  }
];

export default questions;
