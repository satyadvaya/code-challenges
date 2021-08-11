export function doubleNumbers(arr) {
    return arr.map((number) => number * 2);
}

export function stringItUp(arr) {
    return arr.map((number) => number.toString());
}

export function capitalizeNames(arr) {
    return arr.map((name) => name[0].toUpperCase() + name.slice(1).toLowerCase());
}

export function namesOnly(arr) {
    return arr.map((person) => person.name);
}

export function makeStrings(arr) {
    return arr.map((person) => {
        if (person.age >= 18) {
            return (person.name + ' can go to The Matrix')
        } else {
            return (person.name + ' is under age!!')
        };
    })
}

export function readyToPutInTheDOM(arr) {
    return arr.map((person) => '<h1>'+person.name+'</h1><h2>'+person.age+'</h2>');
}