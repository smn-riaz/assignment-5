// Array Filtering and Mapping : Create an array of objects, each representing a person with properties like name, age, and gender. Write a function to filter out all females and then map the remaining people to an array of names. Print the final result.


// Solution

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