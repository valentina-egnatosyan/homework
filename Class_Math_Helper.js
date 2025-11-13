// 🧩 4. MathHelper Class — Task Requirements
// Task:
//  Create a utility class called MathHelper that contains a static method.
// Requirements:
// The class should not require creating an object.


// Add a static method square(n) that returns the square of a number.


// Test the method directly by calling MathHelper.square(4) and print the result.


class MathHelper {
    square(x) {
        return x * x;
    }
}
const helper = new  MathHelper();
console.log(helper.square(4));