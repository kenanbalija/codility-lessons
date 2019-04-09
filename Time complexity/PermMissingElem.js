// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)
    if (A.length == 0) return 1;
    A.sort(compare);
    for (let i=0; i<A.length; i++) {

        if ((i+1) !== A[i] || A[i] === undefined) {
          return i+1;
        }
    }
    return A.length+1;
    
    function compare(a, b) {
        if (a == null ) {
          return 0;
        }
        if (b == null) {
          return 0;
        }
        if (a < b) {
          return -1;
        }
        if (a > b) {
          return 1;
        }
        // a must be equal to b
        return 0;
    }   

}