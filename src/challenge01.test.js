import { doubleNumbers, stringItUp } from './challenge01.js';

test('doubles numbers', () => {
  const input = [2, 5, 100]; // arrange
  const output = doubleNumbers(input); // act
  expect(output).toEqual([4, 10, 200]); // assert
});

// next test for capitalizeNames (add import too)


test('string it up', () => {
  const input = [2, 5, 100]; // arrange
  const output = stringItUp(input); // act
  expect(output).toEqual(["2", "5", "100"]); // assert
});