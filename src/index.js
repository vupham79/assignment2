// Write code to do the following tasks using _reduce_ + _filter_, (you're not allowed to use built-in methods like _length_):

// - Calculate the sum of all numbers in an array
exports.sum = (array) => {
  let sum = array.reduce((sum, item) => {
    return sum + item;
  }, 0)
  return sum;
}

// - Find the minimum number in an array
exports.minimum = (array) => {
  let minimum = array.reduce((minimum, item) => {
    if (item < minimum) {
      return minimum = item;
    } else {
      return minimum = minimum;
    }
  }, array[0]);
  return minimum;
}

// - Find the maximum number in an array
exports.maximum = (array) => {
  let maximum = array.reduce((maximum, item) => {
    if (item > maximum) {
      return maximum = item;
    } else {
      return maximum = maximum;
    }
  }, array[0])
  return maximum;
}

// - Count the number of items in an array
exports.count = (array) => {
  let count = 0;
  array.filter(() => {
    count += 1;
  })
  return count;
}

// - Remove numbers in an array that are divisible for 3 (i.e [1, 2, 3, 4, 5, 6] -> [1, 2, 4, 5])
exports.notDivisibleFor3 = (array) => {
  let result = array.filter((value) => {
    return value % 3 !== 0;
  })
  return result;
}

// - Flatten values of an object/dict: {'a': [1, 2], 'b': [3, 4], 'c': [5, 6]} -> [1, 2, 3, 4, 5, 6]
exports.flatten = (object) => {
  let result = [];
  Object.keys(object).forEach((key) => {
    result = result.concat(object[key]);
  });
  return result;
}

// - Group an array by n items:
// group([1, 2, 3, 4, 5, 6, 7, 8, 9], 3) -> [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
exports.groupByLimit = (array, limit) => {
  let result = [];
  let position = 0;
  let numberOfArray = 0;
  array.forEach((value) => {
    if (numberOfArray == 0) {
      result.push([]);
      numberOfArray += 1;
    }
    if (position < limit) {
      result[numberOfArray - 1].push(value);
      position += 1;
    } else {
      result.push([]);
      numberOfArray += 1;
      result[numberOfArray - 1].push(value);
      position = 1;
    }
  });
  return result;
}

// - Count the number of occurrences of each items of an array:
// [1, 2, 3, 1, 2, 4, 2, 3] -> {1: 2, 2: 3, 3: 2, 4: 1}
exports.countOccurences = (array) => {
  let result = {};
  array.forEach((value) => {
    if (result[value]) {
      result[value] += 1;
    } else {
      result[value] = 1;
    }
  })
  return result;
}

// - Split an array into 2 arrays of odd and even numbers:
// [1, 2, 3, 1, 2, 4, 2, 3] -> [[2, 2, 4, 2], [1, 3, 1, 3]]
exports.split = (array) => {
  let odds = [];
  let evens = [];
  array.forEach((value) => {
    if (value % 2 == 0) {
      odds.push(value);
    } else {
      evens.push(value);
    }
  });
  return [odds, evens];
}

// - Group items of an array by a certain properties:
// [{'age': 1, 'name': 'Alice'}, {'age': 2, 'name': 'Bob'}, {'age': 2, 'name': 'Clark'},...] -> {
//   1: [{'age': 1, 'name': 'Alice'}],
//   2: [{'age': 2, 'name': 'Bob'}, {'age': 2, 'name': 'Clark'}],
//   ...
// }
exports.groupByProperty = (array, properties) => {
  let result = {};
  array.forEach((object) => {
    if (result[object[properties]]) {
      result[object[properties]].push(object);
    } else {
      result[object[properties]] = [object]
    }
  });
  return result;
}