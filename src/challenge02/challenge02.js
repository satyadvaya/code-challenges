export function fiveAndGreaterOnly(arr) {
  return arr.filter((number) => number >= 5);
}

export function evensOnly(arr) {
  return arr.filter((number) => number % 2 === 0);
}

export function fiveCharactersOrFewerOnly(arr) {
  const newArr = arr.filter((a) => a.length <= 5);
  return newArr.sort((a, b) => a.length - b.length);
}

export function peopleWhoBelongToTheIlluminati(arr) {
  return arr.filter((person) => person.member === true);
}

export function ofAge(arr) {
  return arr.filter((person) => person.age > 18);
}

export function leastToGreatest(arr) {
  return arr.sort((a, b) => a - b);
}

export function greatestToLeast(arr) {
  return arr.sort((a, b) => b - a);
}

export function lengthSort(arr) {
  return arr.sort((a, b) => a.length - b.length);
}

export function alphabetical(arr) {
  return arr.sort((a, b) => a.localeCompare(b));
}

export function byAge(arr) {
  return arr.sort((a, b) => a.age - b.age);
}