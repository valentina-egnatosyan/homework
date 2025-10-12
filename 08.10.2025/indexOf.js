1//////
// function indexOf(arr, fn) {
//     const size = arr.length;
    
//     for(let i = 0; i < size; ++i) {
//         if (fn(arr[i])) {
//             return i; 
//         }
//     }   
//     return -1;
// }
// const arr = [1,2,3,4,5,6];
// const indexNumbers = indexOf(arr, (num) => num === 1);
// console.log(indexNumbers);

2//////
function indexOf(arr, value) {
    const size = arr.length;
    
    for(let i = 0; i < size; ++i) {
        if (value === arr[i]) {
            return i; 
        }
    }   
    return -1;
}
const arr = [1,2,3,4,5,6];
const indexNumbers = indexOf(arr,3)
console.log(indexNumbers);
