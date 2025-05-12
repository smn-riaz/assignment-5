// Task: Function Composition : Write three functions: one to square a number, one to double a number, and one to add 5 to a number. Compose these functions to create a new function that squares a number, doubles the result, and then adds 5.


const squareNumber = (n) => n*n


const doubleNumber = (n) => n*2


const add5ToNumber = (n) => n+5


const fullCalculation = (n) => add5ToNumber(doubleNumber(squareNumber(n)))



// console.log(fullCalculation(3));
