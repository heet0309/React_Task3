const add = document.getElementById("add");
const sub = document.getElementById("sub");
const mul = document.getElementById("mul");
const div = document.getElementById("div");
const equals = document.getElementById("equals");

add.addEventListener("click", appendValue);
sub.addEventListener("click", appendValue);
mul.addEventListener("click", appendValue);
div.addEventListener("click", appendValue);
equals.addEventListener("click", calculate);

function appendValue(event) {
  const value = event.target.textContent;
  document.getElementById("result").value += value;
  document.getElementById("result").focus();
}

function customEval(expression) {
  const operators = ["+", "-", "*", "/"];
  const values = expression.split(/[\+\-\*\/]/).map(Number);
  const operations = expression
    .split("")
    .filter((char) => operators.includes(char));

  let result = values[0];

  for (let i = 0; i < operations.length; i++) {
    switch (operations[i]) {
      case "+":
        result = values[i] + values[i + 1];
        break;
      case "-":
        result = values[i] - values[i + 1];
        break;
      case "*":
        result = values[i] * values[i + 1];
        break;
      case "/":
        result = values[i] / values[i + 1];
        break;
      default:
        break;
    }
  }

  return result;
}

function calculate() {
  try {
    const result = customEval(document.getElementById("result").value);
    document.getElementById("result").value = result;
  } catch (error) {
    document.getElementById("result").value = "Error";
  } finally {
    document.getElementById("result").focus();
  }
}
