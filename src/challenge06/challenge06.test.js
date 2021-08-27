import { returnTen } from './challenge06.js';

// Munching Array Data

test('takes in a string and should return the last 10 characters from that string as elements of an array', () => {
    expect(returnTen('hello world')).toStrictEqual(['e','l','l','o',' ','w','o','r','l','d']);
    expect(returnTen('world')).toStrictEqual(['w','o','r','l','d']);
  });