
const mixedValues = [10.99, 'hello', 5.99, undefined, 29.99, '20'];
//Map - Transform each element (optional here)
const mappedNumbers = mixedValues.map(num => num);
//Filter - Ensure we have valid numbers
const filteredNumbers = mappedNumbers.filter(num => !isNaN(num)).slice(0, 3);
//exactly three numbers
if (filteredNumbers.length !== 3) {
  throw new Error("The array does not contain exactly three valid numbers.");
}
// Reduce - Sum the numbers
const sum = filteredNumbers.reduce((acc, curr) => acc + curr, 0);

console.log(sum);
