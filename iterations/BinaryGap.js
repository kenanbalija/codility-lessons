// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(N) {
  // write your code in JavaScript (Node.js 8.9.4)
  const binary = N.toString(2);
  let max = [];
  let current = 0;
  for (let i = 0; i<binary.length; i++) {
      if (binary[i]==0) {
          current++;
      } else if (i == binary.length -1) {
          max.push(current);
      } else {
          max.push(current);
          current = 0;
      }
  }
  return Math.max(...max);
}