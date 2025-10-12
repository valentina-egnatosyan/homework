function mergeArrays(arr1, arr2) {
    if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
        console.log("Invalid input: both arguments must be arrays");
        return null; 
    }

    let arr = arr1;
    for (let i = 0; i < arr2.length; i++) {
        arr[arr.length] = arr2[i];
    }
    return arr;
    
}
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
console.log(mergeArrays(array1, array2));
