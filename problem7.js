// Task: Unique Values :Create an array of numbers with some duplicate values. Write a function to filter out the duplicate values and return a new array with only unique numbers. Print the result.


// Solution

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

