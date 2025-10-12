function search(sentnse, substring) {
    if (typeof sentnse !== 'string' || typeof substring !== 'string') {
        console.log("Invalid input: not a string");
        return -1;
    }
    for (let i = 0; i <= sentnse.length - 1; i++) {
        if (sentnse[i] === substring[0]) {
            let found = true; 
            for (let j = 1; j < substring.length; j++) {
                if (sentnse[i + j] !== substring[j]) {
                    found = false;
                    break;
                }
            }
            if (found === true) {
                console.log(`${i}, ${i + substring.length}`)
                return true;
            } 
        }
    }
    return false;
}

const sentence = "Learning JavaScript";
const substring = "Java";
console.log(search(sentence, substring)); 

