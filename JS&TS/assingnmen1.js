// Task 1- Every first character should be capital
// String: think twice, code once

// Output: Think Twice, Code Once

function capitalizeWords(inputString) {
  //  let words = inputString.split(" ");
  result =
    inputString.slice(1, 6) +
    inputString.charAt(7).toUpperCase() +
    inputString.slice(1);
  //for (let i = 0; i < words.length; i++) {
  // words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
  // }

  // let result = words.join(" ");

  return result;
}

let inputString = "think twice, code once";
let outputString = capitalizeWords(inputString);
console.log(outputString);
