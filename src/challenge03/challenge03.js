// Object.keys()

export function capitalizeObjectKeys(obj) {
    return Object.keys(obj).map((key) => key.toUpperCase());
}