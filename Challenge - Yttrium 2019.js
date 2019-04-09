// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(S, K) {
  // write your code in JavaScript (Node.js 8.9.4)
  let letters = [];
  let substr;
  const arrayS = S.split("")
  for (const [index, value] of arrayS.entries()) {
      
      if (!letters.includes(value)) {
          console.log(letters.length, K);
          if (letters.length == K) {
              let substr = S.substr(index);
              if (letters.includes(substr[substr.length -1])) {
                  return substr.length -1;
              }
              
              return substr.length;
          } else {
              letters.push(value);
          }
      }
  }
  
  
  return -1;
}
