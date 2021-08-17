// Object.keys()

export function capitalizeObjectKeys(obj) {
    return Object.keys(obj).map((key) => key.toUpperCase());
}

export function sortedKeys(obj) {
    return Object.keys(obj).sort((a, b) => a.length - b.length);
}

export function getFilteredKey(obj) {
    return Object.keys(obj).filter((key) => key === 'age');
}