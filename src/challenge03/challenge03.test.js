import { capitalizeObjectKeys } from './challenge03.js';

// Object.keys()

test('given an object, it returns an array that has the keys transformed into uppercase strings', () => {
  const dataObject = { name: 'Angelina Jolie', age: 80 }; //arrange
  const output = capitalizeObjectKeys(dataObject); //act
  expect(output).toEqual(['NAME', 'AGE']); //assert
});