function isEvenOrOdd(num) {
    if (typeof num !== 'number') {
        return "Invalid input: not a number";
    }
  if (num % 2 === 0) {
    return "Even";
  } else {
    return "Odd";
  }         
}
    console.log(isEvenOrOdd(4));     
    console.log(isEvenOrOdd(7)); 