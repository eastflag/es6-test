let array1 = [1,2,3];
let array2 = [4,5];
let array3 = [6,7,8,9,10];

let result = [...array1, ...array2, ...array3].reduce((prev, curr) => prev+curr);
console.log(result);