//Task: Array Reduction : Create an array of numbers. Write a function that uses the reduce method to calculate the sum of all even numbers in the array.


const sumOfEvenNumbers = (nums) => {
return nums.reduce((sum, num )=> {
    return num % 2 === 0 ? sum+num : sum
},0)
}


// console.log(sumOfEvenNumbers([1,2,3,4,5,6,7,8]));