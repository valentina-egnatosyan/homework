function some(arr, fn ) {
    const size = arr.length;            
    for(let i = 0; i < size; ++i) {
        if (fn(arr[i])) {
            return true;
        }
    }
    return false; 
    }
const arr = [1,3,3,5];
const someNumbers = some(arr, (num) => num % 2 === 0);
console.log(someNumbers);
