function every ( arr, fn) {
    const size = arr.length;

    for(let i = 0; i < size; ++i) {
        if (!fn(arr[i])) {
            return false;
        }
    }
    return true; 
}
const arr = [2,3,6,8];
const everyNumbers = every(arr, (num) => num % 2 === 0);
console.log(everyNumbers);  

