function findIndex(arr) {
    const size = arr.length;
    
    for(let i = 0; i < size; i++) {
        if (arr[i] === 9) {
            return i; 
        }
    }
    return -1; 
}

const arr = [3, 6, 9, 12];
console.log(findIndex(arr)); 

