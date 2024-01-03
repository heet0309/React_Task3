//array
//let a:number[]= [1,2,5];
//console.log(a.length);

//tuple 
//let b:[string,number];

//b = ["Hi",1];

//console.log(b);


// Objects
/*let c  :{type:string,model:number} = {
    type : "Lambo",model : 2002
};

c.model = 2015
console.log(c)*/

// enum 
/*enum statuscode{
    Notfound = 404,
    Success = 200
}
console.log(statuscode.Notfound);
console.log(statuscode.Success);*/

// Type Alias 

/*type CarYear = number
type CarType = string
type CarModel = string
type Car = {
  year: CarYear,
  type: CarType,
  model: CarModel
}

const carYear: CarYear = 2001
const carType: CarType = "Toyota"
const carModel: CarModel = "Corolla"
const car: Car = {
  year: carYear,
  type: carType,
  model: carModel
};
console.log(car.model);
console.log(car.type);
console.log(car.year);*/


// interfaces
/*interface Rectangle {
  height: number,
  width: number
}

interface ColoredRectangle extends Rectangle {
  color: string
}

const coloredRectangle: ColoredRectangle = {
  height: 20,
  width: 10,
  color: "red"
};

console.log(coloredRectangle.color);
console.log(coloredRectangle.height);
console.log(coloredRectangle.width);*/

//classes & inheritance
/*class mycar{
   name: string;
  constructor(value:string){
    this.name = value;
  }
}
class carcompany extends mycar{
  company : string;
  constructor(value1:string,value2:string){
    super(value2);
    this.company = value1;
  }
  print(){
    console.log(this.name);
    console.log(this.company);
  }
}
let a = new carcompany("Honda","city");
a.print();*/


// Union Types 
/*let myVar: string | number;
myVar = "Hello";
console.log(myVar.length); // Valid for string
myVar = 42;
console.log(myVar.toFixed(2));*/

// InterSection Types 
/*type Car = { brand: string; model: string };
type Electric = { electric: boolean };

// CarElectric has properties from both Car and Electric
type CarElectric = Car & Electric;

const teslaModelS: CarElectric = {
  brand: "Tesla",
  model: "Model S",
  electric: true,
};

console.log(teslaModelS.brand);
console.log(teslaModelS.model);
console.log(teslaModelS.electric);*/


// Mapped Types
// Removes 'optional' attributes from a type's properties
/*type Concrete<Type> = {
  [Property in keyof Type]?: Type[Property];
};
 
type MaybeUser = {
  id: boolean;
  name: string;
  age: number;
};
 
type User = Concrete<MaybeUser>;
const User = {id:"101",name:"Harsh",age:15};

console.log(User.id);
console.log(User.age);*/

//Type Guards
/*function isNumber(x: any): x is number {
  return typeof x === "number";
}
 
function isString(x: any): x is string {
  return typeof x === "string";
}
 
function padLeft(padding: string | number ) {
  if (isNumber(padding)) {
    return "Number"+padding;
  }
  if (isString(padding)) {
    return "String"+padding;
  }
  throw new Error(`Expected string or number, got '${padding}'.`);
}

var a = 10;
console.log(padLeft(a));*/

// Functions:

/*function add(x:number,y:number){
    return x+y;
}
let a =10;
let b =15;
console.log(add(a,b));*/

// Generics:
/*function identity<Type>(arg: Type): Type {
  return arg;
}

let myIdentity: string = identity("Hello");
let mynumber : number = identity(42);

console.log(myIdentity);
console.log(mynumber);*/

// Generics Using Classes
/*class GenericNumber<NumType> {
  zeroValue: NumType;
  add: (x: NumType, y: NumType) => NumType;
}
 
let myGenericNumber = new GenericNumber<number>();
myGenericNumber.zeroValue = 5;
myGenericNumber.add = function (x, y) {
  return x + y;
};

console.log(myGenericNumber.add(5,5));
console.log(myGenericNumber.zeroValue);*/

// Constraints Generics
/*function printLength<T extends { length: number }>(arg: T): void {
  console.log(arg.length);
}

// Example usage
printLength("Hello");           
printLength([1, 2, 3]);
printLength(12); */


// Decorators:
/*function LogClass(target: Function) {
  console.log(target);
}

// Applying the class decorator
@LogClass
class MyClass {
  constructor(){
    let name: String = "Hello";
  }
}

let myclass = new MyClass();*/

// Method Decorators:
/*function enumerable() {
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    console.log(target);
    console.log(propertyKey);
    console.log(descriptor);
  };
}

// Applying the Method decorator
class MyClass {
  greet: string;

  constructor(message: string) {
    this.greet = message;
  }

  @enumerable()
  printvalue() {
    console.log(this.greet);
  }
}

let myclass = new MyClass("Hello");
myclass.printvalue();*/

// Parameter Decorators:



// NameSpaces:
/*namespace MyNamespace {
  export function count(X: number, Y:number): number {
    return X+Y;
  }
  export function cal(x: number,y:number): number{
    return x*y;
  }
}

// Usage
let cal = MyNamespace.count(5,10);
console.log(cal);
cal = MyNamespace.cal(5,15);
console.log(cal);*/


// Promises:
/*function getHello(): Promise<string> {
  return new Promise((resolve,reject) => {
    setTimeout(() => {
      resolve("Hello"); 
    }, 5000); 
  });
}

getHello()
  .then((result) => {
    console.log(result);
    console.log("Find"); 
  })
  .catch((error) => {
    console.error(error);
  });*/


// Async:Await
// Function that returns a Promise<string> after a delay
// function delayHello(): Promise<string> {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("Hello");
//     }, 3000); // 3 seconds delay
//   });
// }

// // Async function using async/await
// async function greetAfterDelay() {
//   try {
//     const greeting = await delayHello();
//     console.log(greeting);
//     console.log("After Async");
//   } catch (error) {
//     console.error(error);
//   }
// }

// // Call the async function
// greetAfterDelay();


// Error Handling in TypeScript:
// Asynchronous function that returns a Promise<string>
/*async function getHello(): Promise<string> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = false; 

      if (success) {
        resolve("Hello");
      } else {
        reject(new Error("Failed to get 'Hello'"));
      }
    }, 1000); 
  });
}

async function fetchData() {
  try {
    const result = await getHello();
    console.log(result); 
  } catch (error) {
    console.error('Error: ${error.message}');
  }
}

// Call the async function
fetchData();*/
