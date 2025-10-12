function customForEach(arr, func) {
    for (let i = 0; i < arr.length; i++) {
        func(arr[i], i, arr);
    }
    return;
}

customForEach(array,(element, index) => {
    console.log(element);
});