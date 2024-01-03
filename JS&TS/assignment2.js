// Task 2 - Create a common function for all opration like +, -, * and /
// function fun_name (param1 , param2) {
//    return param1 * param2 ;
// }
// console.log('Result: ', fun_name(10, 30))

function calc(op, a, b) {
  switch (op) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "*":
      return a * b;
    case "/":
      if (b !== 0) {
        return a / b;
      } else {
        return "Division by zero is undefined";
      }
    default:
      return "Invalid Operator Entered";
  }
}

console.log("Result : ", calc("+", 10, 30));
console.log("Result : ", calc("-", 10, 5));
console.log("Result : ", calc("*", 10, 3));
console.log("Result : ", calc("/", 10, 2));
console.log("Result : ", calc("@", 10, 2));
