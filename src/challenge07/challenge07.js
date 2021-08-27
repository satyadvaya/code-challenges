export function containsW(str) {
    let regex = /[w]/;

    // let m;
    // while ((m = regex.exec(str)) !== null) {
    //     // This is necessary to avoid infinite loops with zero-width matches
    //     if (m.index === regex.lastIndex) {
    //         regex.lastIndex++;
    //     }
        
    //     // The result can be accessed through the `m`-variable.
    //     m.forEach((match, groupIndex) => {
    //         console.log(`Found match, group ${groupIndex}: ${match}`);
    //     });
    // }

    return regex.test(str);
};


// Copied from challenge07.test.js

// import { containsW } from './challenge07.js';

// // Regex

// describe('Regex Test 2', () => {
//   test('takes in a string. This function should use a regular expression pattern to return true if the string contains the letter \'w\' in lower case or false if it does not', () => {
//     expect(containsW('hello world')).toStrictEqual(true);
//     expect(containsW('Hello World')).toStrictEqual(true);
//     expect(containsW('hello everyone')).toStrictEqual(true);
//   });
// });