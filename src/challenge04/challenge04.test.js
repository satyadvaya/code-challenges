import { getHouses, updateNumbers, totalCharacters, hasChildrenEntries, sortByChildren } from './challenge04.js';

// Object.keys() and Object.entries()

test('given an array of objects, it returns an array of houses that the characters belong to', () => {
    const characters = [
        {
            name: 'Eddard',
            spouse: 'Catelyn',
            children: ['Robb', 'Sansa', 'Arya', 'Bran', 'Rickon'],
            house: 'Stark'
        },
        {
            name: 'Jon A.',
            spouse: 'Lysa',
            children: ['Robin'],
            house: 'Arryn'
        },
        {
            name: 'Cersei',
            spouse: 'Robert',
            children: ['Joffrey', 'Myrcella', 'Tommen'],
            house: 'Lannister'
        },
        {
            name: 'Daenarys',
            spouse: 'Khal Drogo',
            children: ['Drogon', 'Rhaegal', 'Viserion'],
            house: 'Targaryen'
        },
        {
            name: 'Mace',
            spouse: 'Alerie',
            children: ['Margaery', 'Loras'],
            house: 'Tyrell'
        },
        {
            name: 'Euron',
            spouse: null,
            children: [],
            house: 'Greyjoy'
        },
        {
            name: 'Jon S.',
            spouse: null,
            children: [],
            house: 'Snow'
        }
    ]; //arrange
    const output = getHouses(characters); //act
    expect(output).toEqual(['Stark', 'Arryn', 'Lannister', 'Targaryen', 'Tyrell', 'Greyjoy', 'Snow']); //assert
});

test('given an object, it returns an array of transformed key value pairs into strings', () => {
    const dataObject = {'Grace Hopper': '222-303-5938', 'Ada Lovelace': '222-349-9842', 'Alan Turing': '222-853-5933'} //arrange
    const output = updateNumbers(dataObject); //act
    expect(output).toEqual(['Grace Hopper: 222-303-5938','Ada Lovelace: 222-349-9842','Alan Turing: 222-853-5933']); //assert
});

test.skip('given an array of characters, your function will return the total number of characters in the data array', () => {
    const characters = [
        {
            name: 'Eddard',
            spouse: 'Catelyn',
            children: ['Robb', 'Sansa', 'Arya', 'Bran', 'Rickon'],
            house: 'Stark'
        },
        {
            name: 'Jon A.',
            spouse: 'Lysa',
            children: ['Robin'],
            house: 'Arryn'
        },
        {
            name: 'Cersei',
            spouse: 'Robert',
            children: ['Joffrey', 'Myrcella', 'Tommen'],
            house: 'Lannister'
        },
        {
            name: 'Daenarys',
            spouse: 'Khal Drogo',
            children: ['Drogon', 'Rhaegal', 'Viserion'],
            house: 'Targaryen'
        },
        {
            name: 'Mace',
            spouse: 'Alerie',
            children: ['Margaery', 'Loras'],
            house: 'Tyrell'
        },
        {
            name: 'Euron',
            spouse: null,
            children: [],
            house: 'Greyjoy'
        },
        {
            name: 'Jon S.',
            spouse: null,
            children: [],
            house: 'Snow'
        }
    ]; //arrange
    const output = totalCharacters(characters); //act
    expect(output).toEqual(26); //assert
});


// Object.entries()
// THIS ONE IS A DISASTER ...

test.skip('given an arr of objects and a target/character, the function will check if the character has children then return a boolean value of either true or false', () => {
    const characters = [
        {
            name: 'Eddard',
            spouse: 'Catelyn',
            children: ['Robb', 'Sansa', 'Arya', 'Bran', 'Rickon'],
            house: 'Stark'
        },
        {
            name: 'Euron',
            spouse: null,
            children: [],
            house: 'Greyjoy'
        }
    ]; //arrange
    const output = hasChildrenEntries(characters); //act
    expect(output).toEqual(true, false); //assert
});

test.skip('given an array of objects, it sorts the houses by amount of children (and if needed also alphabetically) and if two houses have the same amount of children or no children, the house name should sort alphabetically', () => {
    const characters = [
        {
            name: 'Eddard',
            spouse: 'Catelyn',
            children: ['Robb', 'Sansa', 'Arya', 'Bran', 'Rickon'],
            house: 'Stark'
        },
        {
            name: 'Jon A.',
            spouse: 'Lysa',
            children: ['Robin'],
            house: 'Arryn'
        },
        {
            name: 'Cersei',
            spouse: 'Robert',
            children: ['Joffrey', 'Myrcella', 'Tommen'],
            house: 'Lannister'
        },
        {
            name: 'Daenarys',
            spouse: 'Khal Drogo',
            children: ['Drogon', 'Rhaegal', 'Viserion'],
            house: 'Targaryen'
        },
        {
            name: 'Mace',
            spouse: 'Alerie',
            children: ['Margaery', 'Loras'],
            house: 'Tyrell'
        },
        {
            name: 'Euron',
            spouse: null,
            children: [],
            house: 'Greyjoy'
        },
        {
            name: 'Jon S.',
            spouse: null,
            children: [],
            house: 'Snow'
        }
    ]; //arrange
    const output = sortByChildren(characters); //act
    expect(output).toEqual([ 
        {
            name: 'Euron',
            spouse: null,
            children: [],
            house: 'Greyjoy'
        },
        {
            name: 'Jon S.',
            spouse: null,
            children: [],
            house: 'Snow'
        },
        {
            name: 'Jon A.',
            spouse: 'Lysa',
            children: ['Robin'],
            house: 'Arryn'
        },
        {
            name: 'Mace',
            spouse: 'Alerie',
            children: ['Margaery', 'Loras'], house: 'Tyrell'
        },
        {
            name: 'Cersei',
            spouse: 'Robert',
            children: ['Joffrey', 'Myrcella', 'Tommen'],
            house: 'Lannister'
        },
        {
            name: 'Daenarys',
            spouse: 'Khal Drogo',
            children: ['Drogon', 'Rhaegal', 'Viserion'],
            house: 'Targaryen'
        },
        {
            name: 'Eddard',
            spouse: 'Catelyn',
            children: ['Robb', 'Sansa', 'Arya', 'Bran', 'Rickon'],
            house: 'Stark'
        }
    ]); //assert
});