import rules from './allRules.js'

function applyRules(data, condition) {

  rules.forEach(function (rule) {
    data = rule.applyRule(data, condition);
  });

  return data;
}

export default applyRules;