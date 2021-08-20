// Object.keys() and Object.entries()

export function getHouses(obj) {
    return obj.map((thing) => thing.house);
}

export function updateNumbers(obj) {
    const arrayOfArrays = Object.entries(obj);
    return arrayOfArrays.map((pair) => `${pair[0]}: ${pair[1]}`)
}

export function totalCharacters(arr) {
    let names = arr.map((thing) => thing.name);
    let spouses = arr.map((thing) => thing.spouse).filter((thing) => thing !== null);
    // console.log(spouses);
    let children = arr.map((thing) => thing.children);
    // console.log(children);
    let namesCount = names.length;
    let spousesCount = spouses.length;
    // let arr.filter((thing) => thing.spouses !== 'null')[0];
    // console.log(spouses.length);
    // let childrenUnleashed = children.map(booger =>)
    // console.log(names, spouses, children);
}


// Object.entries()
// THIS ONE IS A DISASTER ...

export function hasChildrenEntries(arr, character) {

}

export function sortByChildren(arr){

}