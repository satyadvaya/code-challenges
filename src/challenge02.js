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