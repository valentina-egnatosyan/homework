
// const array = [1,2,3,4,5]; 

// const { on } = require("events");

// function receiver(element, i, arr)  {
//     console.log(` ${i} = ${element}`);
// }

// array.forEach(receiver)

// for (let i = 0; i < array.length; i++) {
//     console.log(` ${i} = ${array[i]}`);
// }

// const fn = (element) => {
//     console.log(element);
// }

// array.forEach(fn);

// function makeHamburger(onGetCustomName) {
//     const name = onGetCustomName();
//     console.log(`You ordered a ${name} hamburger`);
// }


// makeHamburger(() => "Cheese");
// makeHamburger(() => "Bacon");
// makeHamburger(() => "Veggie");
// makeHamburger(() => "Double Meat");
// makeHamburger(() => "Mushroom");
// makeHamburger(() => "BBQ");
// makeHamburger(() => "Spicy");
// makeHamburger(() => "Hawaiian");
// makeHamburger(() => "Classic");
// makeHamburger(() => "Deluxe");


// function customForEach(arr, func) {
//     for (let i = 0; i < arr.length; i++) {
//         func(arr[i], i, arr);
//     }
//     return;
// }

// customForEach(array,receiver )


// function customMap(arr, func) {
//     const result = [];
//     for (let i = 0; i < arr.length; i++) {
//         result[i] = func(arr[i], i, arr);
//     }
//     return result;
// }

// const squaredArray = customMap(array, (element) => String(element));
// const mapFunction = array.map((element) => String(element));
// console.log(squaredArray); // [1, 4, 9, 16, 25]





























// function jur(func) {
//     if (func()) {
//         console.log("Yes");
//     } 
//     else {
//         console.log("No");
//     }   
// }       
// jur(() => 5 > 3);   
// jur(() =>  "a" !== "a" );

// const kamaz = () => {
//     return true
// }
// jur(kamaz);

// function onProgress(onSuccess, onFailure, onConsoleNumber) {
//     const randomNumber = Math.random();
//     onConsoleNumber(randomNumber);
//    if (randomNumber  > 0.5) {
//         onSuccess(randomNumber);
//     } else  {
//     onFailure();
//     }
// }

// onProgress ((dzncaxik) => {
//     console.log(` Operation successful ${dzncaxik}`);
// },
// () => {
//     console.log("Operation failed");
// },
// (pult) => {
//     console.log(`Generated number: ${pult}` )   }
//  )


    // function map(arr, fn) {
    //     const size = arr.length;
    //     const result = [];      
    
    //     for (let i = 0; i < size; ++i) {
    //         if (fn(arr[i])) {
    //         result.push(fn(arr[i])) 
    //         }
    //     }
    //     return result;
    // }
    // const arr = [1,2,3,4,5,6];
    // const mapNumbers = map (arr, (num) => num * 2);
    // console.log(mapNumbers);    
        

// function some(arr, fn ) {
//     const size = arr.length;            
//     for(let i = 0; i < size; ++i) {
//         if (fn(arr[i])) {
//             return true;
//         }
//     }
//     return false; 
//     }
// const arr = [1,3,3,5];
// const someNumbers = some(arr, (num) => num % 2 === 0);
// console.log(someNumbers);





// function every ( arr, fn) {
//     const size = arr.length;

//     for(let i = 0; i < size; ++i) {
//         if (!fn(arr[i])) {
//             return false;
//         }
//     }
//     return true; 
// }
// const arr = [2,3,6,8];
// const everyNumbers = every(arr, (num) => num % 2 === 0);
// console.log(everyNumbers);  


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



// function indexOf(arr, value) {
//     const size = arr.length;
    
//     for(let i = 0; i < size; ++i) {
//         if (value === arr[i]) {
//             return i; 
//         }
//     }   
//     return -1;
// }
// const arr = [1,2,3,4,5,6];
// const indexNumbers = indexOf(arr,3)
// console.log(indexNumbers);


