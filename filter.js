 function filter(arr, fn) {
    const size = arr.length;
    const result = []; 
    for (let i = 0; i < size; ++i) {
    if (fn(arr[i])) {
        result.push(arr[i]);
    }
 }
  return result;
}
  const arr = [1,2,3,4,5,6,7,8,9,10];

const filtersNumber = filter(arr, (num) => num > 5);  
console.log(filtersNumber);
