// Task: Leap Year Checker : Write a function that determines whether a given year is a leap year. Example: Happy New Year



const checkLeapYear = (year) => {
  if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
    return `Happy Leap Year : ${year}`;
  }
  return `Happy Normal Year : ${year}`;
};



// console.log(checkLeapYear(2024))