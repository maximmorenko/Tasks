function sort(data, condition) {
  if (!condition.sort_by) {
    return data;
  }

  const key = condition.sort_by[0];
  // сортируем коллекцию по заданному ключу
  return data.sort(function (a, b) {
    if (a[key] < b[key]) {
      return -1;
    }
    if (a[key] > b[key]) {
      return 1;
    }
    return 0;
  });
};

export default {applyRule: sort};
