import { fiveAndGreaterOnly, evensOnly, fiveCharactersOrFewerOnly } from './challenge02.js';

test('five and greater only', () => {
  const input = [3, 6, 8, 2]; // arrange
  const output = fiveAndGreaterOnly(input); // act
  expect(output).toEqual([6, 8]); // assert
});

test('given an array of numbers, returns a new array that only includes the even numbers', () => {
  const input = [3, 6, 8, 2]; // arrange
  const output = evensOnly(input); // act
  expect(output).toEqual([6, 8, 2]); // assert
});

test('given an array of strings, returns a new array that only includes those that are 5 characters or fewer in length', () => {
  const input = ['dog', 'wolf', 'by', 'family', 'eaten', 'camping']; // arrange
  const output = fiveCharactersOrFewerOnly(input); // act
  expect(output).toEqual(['by', 'dog', 'wolf', 'eaten']); // assert
});