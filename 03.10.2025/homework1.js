
function countCharacters(str) {
    if (typeof str !== 'string') {
        console.log("Invalid input: not a string");
        return -1; 
    }

    let count = 0;
    for (let i = 0; str[i] !== undefined; i++) {
        count++;
    }
    return count;
}

console.log("Hello, world!".length)
console.log(countCharacters("Hello, world!"));
console.log(countCharacters(12345));