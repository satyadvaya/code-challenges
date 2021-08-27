// Munching Array Data

export function returnTen(str) {
    return str.split('').splice(-10);
};

export function findMax(matrix) {
    return Math.max.apply(null, matrix.flat());
};