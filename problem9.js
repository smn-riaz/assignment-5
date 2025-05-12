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