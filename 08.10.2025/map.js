 function map(arr, fn) {
        const size = arr.length;
        const result = [];      
    
        for (let i = 0; i < size; ++i) {
            if (fn(arr[i])) {
            result.push(fn(arr[i])) 
            }
        }
        return result;
    }
    const arr = [1,2,3,4,5,6];
    const mapNumbers = map (arr, (num) => num * 2);
    console.log(mapNumbers);    
        