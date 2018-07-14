"use strict"

// console.log("Hello World!")

// var myFunctions= [];

// var num = function(i){
//     var f = function(){console.log(i);}        
//     return f;
// }

// for(var i=0;i<2;i++){
//     myFunctions.push(num(i));
// }

// myFunctions[0]();
// myFunctions[1]();

// var person= new Object();
// person.name= "Hashmeet";
// person.gender="Male";

// var person = {
//     name:"Hashmeet",
//     gender:"Male"
// }
// console.log(person)

// var v =12;
// function f1(){
//     var v =11;
//     function f2(){
//         console.log(v);
//         // var v =13;
//     }
// }

// f1();

// let v = 11;
// if(true){
// let v=12;
// console.log("In block"+ v);
// }
// console.log(v);

// console.log(add(1,2));

// let add =function(a,b){
//     return a+b;
// }

// console.log(add(1,2));

// var func = function(a,b,...r){
//     console.log(a);
//     console.log(b);
//     console.log(r);
//     console.log(Array.isArray(r));
// }

// func(1,2,3,4,5,6)

// var newPriceArray = Array(...[,,,]);
// console.log(newPriceArray);

// var price = 5.99, quantity = 10;
// var productView = {
// price: 7.99,
// quantity: 1,
// calculateValue() {
// return this.price * this.quantity
// }
// };
// console.log(productView.calculateValue());

// var method = 'doIt'
// var productView = {

//     [method + "-001"]() {
//         console.log("in a method");
//     }

// };
// productView['doIt-001']()

// function processInvoice(segment1, segment2) {
//     console.log(segment1 + " " + segment2);
// }
// processInvoice(`template`, `temp`);
// function processInvoice(segments, ...values) {
//     console.log(segments);
//     console.log(values);
// }
// let invoiceNum = '1350';
// let amount = '2000';
// processInvoice`Invoice: ${invoiceNum} for ${amount}`;

// let salary = ['32000', '50000', '75000'];
// let [ low, , high ] = salary;
// console.log(high);

// let salary = {
//     low: '32000',
//     average: '50000',
//     high: '75000'
// };
// let newLow, newAverage, newHigh;
// ({ low: newLow, average: newAverage, high: newHigh } = salary);
// console.log(newHigh);

// for (let [a,b] of [[5, 10]]) {
//     console.log(`${a} ${b}`);
// }

// function getResult() {
//     let high, low;
//     return { high, low } = { high: 500, low: 200 };
// }
// console.log(getResult());
let nums = [10, 20, 30]


function display(...nums){
    console.log(nums[0]);
};

display(...nums);
