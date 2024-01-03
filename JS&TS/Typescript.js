//array
//let a:number[]= [1,2,5];
//console.log(a.length);
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
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
function delayHello() {
    return new Promise(function (resolve) {
        setTimeout(function () {
            resolve("Hello");
        }, 3000); // 3 seconds delay
    });
}
// Async function using async/await
function greetAfterDelay() {
    return __awaiter(this, void 0, void 0, function () {
        var greeting, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, delayHello()];
                case 1:
                    greeting = _a.sent();
                    console.log(greeting);
                    console.log("After Async");
                    return [3 /*break*/, 3];
                case 2:
                    error_1 = _a.sent();
                    console.error(error_1);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
// Call the async function
greetAfterDelay();
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
