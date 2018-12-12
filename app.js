const app = require('./src');

const arr = [20, 2, 27, 32, 14, 24, 7, 29, 30, 18, 35, 36, 23, 8, 37, 16, 21, 12, 17, 4, 33, 25, 31, 13, 34, 9, 26, 0, 38, 22, 39, 10, 5, 19, 1, 11, 3, 6, 15, 28];
const obj1 = {
  'h': [1, 2],
  'v': [3, 4],
  't': [5, 6],
  'a': [4, 6],
  'i': [12, 9],
  'm': [33, 21],
  'k': [15, 11]
}
const obj2 = [{ 'age': 1, 'name': 'Alice' }, { 'age': 2, 'name': 'Bob' }, { 'age': 2, 'name': 'Clark' }, { 'age': 3, 'name': 'Lionel' }];
const tmp = {
  1: [{ 'age': 1, 'name': 'Alice' }],
  2: [{ 'age': 2, 'name': 'Bob' }, { 'age': 2, 'name': 'Clark' }],
}

console.log(app.groupByProperty(obj2, 'age'));