
// Solution - 1

// Array Filtering and Mapping : Create an array of objects, each representing a person with properties like name, age, and gender. Write a function to filter out all females and then map the remaining people to an array of names. Print the final result.


const filterMappingPeople = (peopleArr) => {
  return peopleArr.filter(people => people.gender !== 'female').map(people => people.name)
}


// console.log(filterMappingPeople([
//     {
//         name:"Ali",
//         age:25,
//         gender:'male'
//     },
//     {
//         name:"Baker",
//         age:22,
//         gender:'male'
//     },
//     {
//         name:"Sakila",
//         age:28,
//         gender:'female'
//     },
//     {
//         name:"Aliya",
//         age:22,
//         gender:'female'
//     },
//     {
//         name:"Rakib",
//         age:29,
//         gender:'male'
//     }
// ]));







// Solution - 2

// Task: Object Manipulation : Create an array of objects representing books with properties like title, author, and year. Write a function that takes the array and returns a new array with only the book titles. Print the result.


const bookObjManipulaton = (bookArr) => {

    let titleArr = []

    for (let book of bookArr){
        titleArr.push(book.title)
    }
    return titleArr
}


// console.log(bookObjManipulaton([
//     {
//         title:'Harry Potter',
//         author:'JK Rowling',
//         year:'1997'
//     },
//     {
//         title: 'Nandito Narake',
//         author:'Humayon Ahamad',
//         year:'1970'
//     },
//     {
//         title: 'Atomic Habits',
//         author: 'James Clear',
//         year:'2018'
//     }
// ]));







// Solution - 3

// Task: Function Composition : Write three functions: one to square a number, one to double a number, and one to add 5 to a number. Compose these functions to create a new function that squares a number, doubles the result, and then adds 5.



const squareNumber = (n) => n*n


const doubleNumber = (n) => n*2


const add5ToNumber = (n) => n+5


const fullCalculation = (n) => add5ToNumber(doubleNumber(squareNumber(n)))



// console.log(fullCalculation(3));







// Solution - 4

// Task: Sorting Objects : Create an array of objects representing cars with properties like make, model, and year. Write a function to sort the array of cars by the year of manufacture in ascending order. Print the sorted array.



const sortedByYear = (carArr) => {
   return carArr.sort((a, b) => a.year - b.year);
}


// console.log(
//   sortedByYear([
//     { make: "Toyota", model: "Camry", year: 2020 },
//     { make: "Honda", model: "Civic", year: 2018 },
//     { make: "Ford", model: "Mustang", year: 2021 },
//     { make: "Chevrolet", model: "Malibu", year: 2019 },
//     { make: "Tesla", model: "Model 3", year: 2022 },
//   ])
// );







// Solution - 5

//Task: Array Reduction : Create an array of numbers. Write a function that uses the reduce method to calculate the sum of all even numbers in the array.


const sumOfEvenNumbers = (nums) => {
return nums.reduce((sum, num )=> {
    return num % 2 === 0 ? sum+num : sum
},0)
}


// console.log(sumOfEvenNumbers([1,2,3,4,5,6,7,8]));






// Solution - 6

// Task: Leap Year Checker : Write a function that determines whether a given year is a leap year. Example: Happy New Year



const checkLeapYear = (year) => {
  if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
    return `Happy Leap Year : ${year}`;
  }
  return `Happy Normal Year : ${year}`;
};



// console.log(checkLeapYear(2024))







// Solution - 7

// Task: Unique Values :Create an array of numbers with some duplicate values. Write a function to filter out the duplicate values and return a new array with only unique numbers. Print the result.


const filterUniqueValues = (arr) => {

    let uniqueValue = new Set()

    for (let a of arr){
        if(!uniqueValue.has(a)){
            uniqueValue.add(a)
        }
    }
    return [...uniqueValue]
}


// console.log(filterUniqueValues([2,3,8,4,2,3,5,7,9,3,6,8,1]));





// Solution - 8

// Task: Find Maximum Value : Write a function that takes an array of numbers and returns the maximum value.


const findMaxValue = (numsArr) => {

    let maxNum = numsArr[0]

    for (let i = 0 ; i <numsArr.length; i++){
        if(maxNum<numsArr[i]){
            maxNum = numsArr[i]
        }
    }
    return maxNum

}


// console.log(findMaxValue([2,10,9,8,7,12,7,9,14]));







// Solution - 9

// Task: Advanced Sorting : Create an array of objects representing students with 'name' and 'grades' properties. Write a function to sort the students by average grade in descending order.

const avgGrades = (grades) => {
    return grades.reduce((sum,grade) => sum + grade,0) / grades.length
}


const advancedSorting = (studentsArr) => {
    return studentsArr.sort((a,b) => avgGrades(b.grades) - avgGrades(a.grades))
}





// console.log(advancedSorting([
//     {
//     name:"Akib",
//     grades:[3.5, 3.6, 3.2, 3.7]
// },
//     {
//     name:"Jakib",
//     grades:[3.2, 3.1, 3.8, 3.7]
// },
//     {
//     name:"Lakib",
//     grades:[3.5, 3.3, 3.4, 3.3]
// },
// ]));