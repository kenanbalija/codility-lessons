// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A, K) {
  // write your code in JavaScript (Node.js 8.9.4)
  if (K == 0) {
      return A;
  }
  
  let realArray = A;
  let newArray;
  
  for (let i =0; i<K; i++) {
      newArray = [];
      for (let j=0; j<realArray.length; j++) {
          if (j == realArray.length - 1) {
              newArray[0] = realArray[realArray.length-1];
          } else {
              newArray[j+1] = realArray[j];
          }
      }
      realArray = newArray;
  }
  
  return realArray;
}