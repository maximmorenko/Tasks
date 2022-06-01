function includes(data, condition) {
  if (!condition.include) {
    return data;
  }

  // [
  //   {"name": "John", "email": "john2@mail.com"}
  //   {"name": "John", "email": "john1@mail.com"}
  // ]

  // {"include": [{"name": "John"}, {"name": "Peter"}]}

  // оставляем только те элементы которые соответствуют правилу
  return data.filter(function (dataElement) {

    // для текущего элемента ищем подходит ли он под критерий включения
    return condition.include.find(function(include) {
      // берем имя ключа и смотрим совпадет ли значение элемента с тем что указано
      // в правиле
      const keyName = Object.keys(include)[0];

      return dataElement[keyName] === include[keyName];
    }) !== undefined; // если найден во включениях то оставляем в коллекции
  });
};

export default {applyRule: includes};
