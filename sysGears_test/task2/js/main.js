import applyRules from './applyRules.js';

const inputData = {
    data: [
        {"user": "mike@mail.com", "rating": 20, "disabled": false},
        {"user": "greg@mail.com", "rating": 14, "disabled": false},
        {"user": "john@mail.com", "rating": 25, "disabled": true}
    ],
    condition: {
        "exclude": [{"disabled": true}],
        "sort_by": ["rating"]
    }
};

const resultData = applyRules(inputData.data, inputData.condition);

console.log(JSON.stringify(inputData));
console.log('');
console.log(JSON.stringify(resultData));

console.log('');
console.log('');
console.log('');

const inputData1 = {
    data: [
        {"name": "John", "email": "john2@mail.com"},
        {"name": "John", "email": "john1@mail.com"},
        {"name": "Jane", "email": "jane@mail.com"}
    ],
    condition: {
        "include": [{"name": "John"}],
        "sort_by": ["email"]
    }
};

const resultData1 = applyRules(inputData1.data, inputData1.condition);

console.log(JSON.stringify(inputData1));
console.log('');
console.log(JSON.stringify(resultData1));



export default {};
