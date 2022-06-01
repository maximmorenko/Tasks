function exclude(data, condition) {
  if (!condition.exclude) {
    return data;
  }

  // [
  //   {"name": "John", "email": "john2@mail.com"}
  //   {"name": "John", "email": "john1@mail.com"}
  // ]

  // {"exclude": [{"name": "John"}, {"name": "Peter"}]}

  // оставляем только те элементы которые соответствуют правилу
  return data.filter(function (dataElement) {

    // для текущего элемента ищем подходит ли он под критерий исключения
    return condition.exclude.find(function(exclude) {
      // берем имя ключа и смотрим совпадет ли значение элемента с тем что указано
      // в правиле
      const keyName = Object.keys(exclude)[0];

      return dataElement[keyName] === exclude[keyName];
    }) === undefined; // если не найден в исключениях, то оставляем в коллекции
  });
};

export default {applyRule: exclude};
