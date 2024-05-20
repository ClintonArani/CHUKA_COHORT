let numbers = [5, 10, 15];

let sum = numbers
    .filter(number => number >= 5)  
    .map(number => number )     
    .reduce((accumulator, currentValue) => accumulator + currentValue, 0); 

console.log("Sum after filtering and doubling:", sum);  