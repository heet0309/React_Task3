//      Variables and Data Types

//     let message = "Hello, JavaScript!";
//     console.log(message);

//     let number = 42;
//     console.log(number);

//     let isTrue = true;
//     console.log(isTrue);

//       Functions
//     function add(a, b) {
//       return a + b;
//     }

//     let result = add(3, 7);
//     console.log(result);

//       Arrays
//     let fruits = ["Apple", "Banana", "Orange"];
//     console.log(fruits);

//       Objects
//     let person = {
//       firstName: "John",
//       lastName: "Doe",
//       age: 30,
//       greet: function () {
//         console.log(`Hello, ${this.firstName} ${this.lastName}!`);
//       },
//     };

//     person.greet();

//       Conditionals
//     let temperature = 25;

//     if (temperature > 30) {
//       console.log("It's hot outside!");
//     } else if (temperature > 20) {
//       console.log("It's a pleasant day.");
//     } else {
//       console.log("It's a bit chilly.");
//     }

//       Loops
//     for (let i = 0; i < 5; i++) {
//       console.log(`Iteration ${i}`);
//     }

//       Event Handling
//     document.getElementById("myButton").addEventListener("click", () => {
//       console.log("Button clicked!");
//     });

//       Error Handling
//     try {
//       throw new Error("This is an example error.");
//     } catch (error) {
//       console.error(error.message);
//     }

//   try {
//     let userInput = prompt("Enter a number: ");
//     let parsedNumber = parseInt(userInput);

//     if (isNaN(parsedNumber)) {
//       throw new Error("Invalid input: Not a number");
//     }

//     console.log("Parsed number:", parsedNumber);
//   } catch (error) {

//     console.error("An error occurred:", error.message);
//   } finally {
//       console.log("Execution complete.");
//   }

//     const multiply = (a, b) => a * b;
//     console.log(`Multiplication: ${multiply(5, 3)}`);

//       Classes
//     class Car {
//       constructor(make, model) {
//         this.make = make;
//         this.model = model;
//       }

//       displayInfo() {
//         console.log(`Car: ${this.make} ${this.model}`);
//       }
//     }

//     const myCar = new Car("Toyota", "Camry");
//     myCar.displayInfo();

//       Function Declaration
//     function add(a, b) {
//       return a + b;
//     }

//       Function Expression
//     var subtract = function (a, b) {
//       return a - b;
//     };

//       Arrow Function
//     const multiply = (a, b) => a * b;

//       Anonymous Function
//     var divide = function (a, b) {
//       return a / b;
//     };

//       Immediately Invoked Function Expression (IIFE)
//     (function () {
//       console.log("I am an IIFE!");
//     })();

//       Function with Default Parameters
//     function greet(name = "Guest") {
//       console.log("Hello, " + name + "!");
//     }

//       Callback Function
//     function doSomethingAsync(callback) {
//       setTimeout(function () {
//         console.log("Async operation completed!");
//         callback();
//       }, 1000);
//     }

//     console.log("Addition:", add(5, 3));
//     console.log("Subtraction:", subtract(8, 4));
//     console.log("Multiplication:", multiply(2, 6));
//     console.log("Division:", divide(10, 2));

//     greet("John");
//     greet();
//     doSomethingAsync(function () {
//       console.log("Callback executed after async operation");
//     });

// <!DOCTYPE html>
// <html>
// <head>
//   <title>Event Handling in JavaScript</title>
// </head>
// <body>

// <button id="myButton">Click me!</button>

// <script>
//   var button = document.getElementById("myButton");

//   button.addEventListener("click", function()
//{
//     alert("Button clicked!");
//   });
// </script>

// </body>
// </html>

// <!DOCTYPE html>
// <html>
// <body>

// <p>Counter on click:</p>
// <p id="demo">0</p>
// <p><button onclick="clickCounter()" type="button">Count</button></p>

// <script>
// function clickCounter() {
//   if (sessionStorage.clickcount) {
//     sessionStorage.clickcount = Number(sessionStorage.clickcount) + 1;
//   } else {
//     sessionStorage.clickcount = 1;
//     }
//   document.getElementById("demo").innerHTML = sessionStorage.clickcount;
// }
// </script>

// </body>
// </html>

// function setCookie(name, value, days) {
//     var expires = "";
//     if (days) {
//       var date = new Date();
//       date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
//       expires = "; expires=" + date.toUTCString();
//     }
//     document.cookie = name + "=" + value + expires + "; path=/";
//   }

//   function getCookie(name) {
//     var nameEQ = name + "=";
//     var cookies = document.cookie.split(";");
//     for (var i = 0; i < cookies.length; i++) {
//       var cookie = cookies[i];
//       while (cookie.charAt(0) === " ") {
//         cookie = cookie.substring(1, cookie.length);
//       }
//       if (cookie.indexOf(nameEQ) === 0) {
//         return cookie.substring(nameEQ.length, cookie.length);
//       }
//     }
//     return null;
//   }

//   function deleteCookie(name) {
//     document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
//   }

//    setCookie("username", "Heet", 7);

//   var username = getCookie("username");
//   console.log(username);

// Callback example
function fetchDataWithCallback(callback) {
  setTimeout(() => {
    const data = { message: "Data fetched with callback" };
    callback(data);
  }, 1000);
}

// Timer example
function fetchDataWithTimer() {
  return new Promise((resolve) => {
    setTimeout(() => {
      const data = { message: "Data fetched with timer" };
      resolve(data);
    }, 1500);
  });
}

// Promise example
function fetchDataWithPromise() {
  return new Promise((resolve) => {
    const data = { message: "Data fetched with promise" };
    resolve(data);
  });
}

// Async/Await example
async function fetchDataWithAsyncAwait() {
  return new Promise((resolve) => {
    setTimeout(() => {
      const data = { message: "Data fetched with async/await" };
      resolve(data);
    }, 2000);
  });
}

// Closures example
function createCounter() {
  let count = 0;

  return function () {
    count++;
    console.log(`Count: ${count}`);
  };
}

// Event Loop example
console.log("Start");

fetchDataWithCallback((result) => {
  console.log(result.message);

  fetchDataWithTimer().then((result) => {
    console.log(result.message);

    fetchDataWithPromise().then((result) => {
      console.log(result.message);

      fetchDataWithAsyncAwait().then((result) => {
        console.log(result.message);

        const counter = createCounter();
        counter();

        console.log("End");
      });
    });
  });
});
