// 🧩 3. Student Class — Task Requirements
// Task:
//  Create a class called Student that stores a student’s name and grades.
// Requirements:
// The class must have a constructor that takes one parameter name.


// It should have an empty array property grades.


// Add a method addGrade(grade) to add a grade to the array.


// Add a method average() that returns the average of all grades (or 0 if there are no grades).


// Create one student, add a few grades, and print the average grade.


class Student {
    constructor (name, grades = []) {
       this.name = name;
       this.grades = grades;
    }
addGrade(grade) {
 return this.grades.push(grade);

}


average() {
    if (this.grades.length === 0) {
    return 0;
    } 
    let sum = 0;
    let average = 0;

    for (let i = 0; i < this.grades.length; ++i) {
      sum += this.grades[i];
    }
      return average = sum / this.grades.length;
}
}

const OneStudent = new Student ("Hayk", [20,50,20]);
console.log(OneStudent.average());
