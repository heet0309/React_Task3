//variables and types
// console.log("heet");
// let fname="heet"
// console.log(fname);
// let abc = true;
// let a: number = 123;
// let detail: any=1234567890
// detail="heet"
// detail=false
// console.log(detail);
// // tuple
// let ourTuple: [number, boolean, string];
// ourTuple = [126,false, 'Coding God was mistaken'];
// console.log(ourTuple);
// const sum = (a:number,b:number)=>{
//     return a+b;
// }
// console.log(sum(5,10));
//enums
// enum CardinalDirections {
//     North,
//     East,
//     South,
//     West
//   };
//   let currentDirection = CardinalDirections.South;
//   console.log(currentDirection);
// //type aliases
// type CarYear = number;
// type CarType = string;
// type CarModel = string;
// type Car = {
//   year: CarYear,
//   type: CarType,
//   model: CarModel
// };
// const carYear: CarYear = 2001
// const carType: CarType = "Toyota"
// const carModel: CarModel = "Corolla"
// const car: Car = {
//   year: carYear,
//   type: carType,
//   model: carModel
// };
// console.log(car);
// //interface
// interface Rectangle {
//   height: number,
//   width: number
// };
// const rectangle: Rectangle = {
//   height: 20,
//   width: 10
// };
// console.log(rectangle);
// functions
//   return a + b + (c || 0);
// }
// console.log(add(2,5,5))
// type Negate = (value: number) => number;
// const negateFunction: Negate = (value) => value * -1;
// console.log(negateFunction(10));
// //generics
// class NamedValue<T> {
//     private _value: T | undefined;
//     constructor(private name: string) {}
//     public setValue(value: T) {
//       this._value = value;
//     }
//     public getValue(): T | undefined {
//       return this._value;
//     }
//     public toString(): string {
//       return `${this.name}: ${this._value}`;
//     }
//   }
//   const value = new NamedValue<string>('myNumber');
//   value.setValue("heet");
//   console.log(value); 
// function MyDecorator(){
//     return function (target: any, propertyKey: string | symbol) {
//     console.log("Target:", target);
//     console.log("Property Key:", propertyKey);
// }
// }
// class Example {
//     @MyDecorator
//     myMethod() {
//         console.log("Hello, world!");
//     }
// }
// let myClass = new Example;
// myClass.myMethod();
// function MyDecorator(target: Function) {
//     console.log("iii0");
// }
// @MyDecorator
// class Example {
//     constructor(){
//     }   
//     myMethod() {
//         console.log("Hello, world!");
//     }
// }
// let myClass = new Example();
// myClass.myMethod();
// namespace MyNamespace {
//     export function count(X: number, Y:number): number {
//       return X+Y;
//     }
//     export function cal(x: number,y:number): number{
//       return x*y;
//     }
//   }
//   Usage
//   let cal = MyNamespace.count(5,10);
//   console.log(cal);
//   cal = MyNamespace.cal(5,15);
//   console.log(cal);
console.clear();
function getHello() {
    console.log("before Promisessss");
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            reject("Hello");
        }, 5000);
    });
}
getHello()
    .then(function (result) {
    console.log(result);
    console.log("Find");
})
    .catch(function (error) {
    console.error(error);
});
