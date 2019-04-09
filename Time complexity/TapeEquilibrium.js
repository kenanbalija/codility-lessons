//92%
// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  const findSum = (arr) => {
    return arr.reduce((a,b) => a + b, 0);
  }
  
  let differences = [];
  
  if (A.length == 1) {
      return 0;
  }

  if (A.length == 2) {
    return Math.abs(A[0] - A[1]);
  }
  
  let rightSum = findSum(A);
  let leftSum = 0;
  

  for (let i of A) {
    leftSum += i;
    rightSum -= i;
    differences.push(Math.abs(leftSum - rightSum));
  }
  
  return Math.min(...differences);
}

