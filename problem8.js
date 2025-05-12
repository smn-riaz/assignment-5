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
