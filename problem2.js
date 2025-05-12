// Task: Object Manipulation : Create an array of objects representing books with properties like title, author, and year. Write a function that takes the array and returns a new array with only the book titles. Print the result.


// Solution

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