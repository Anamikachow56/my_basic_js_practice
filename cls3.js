var prompt = require('prompt-sync')();
// var num = Number(prompt("Enter score : "));
//  if (num != 80){
// console.log("your score is")}
// else {
//     ("you are fail")

// var diff = Number(prompt("diff bet each step: "))
// 
// var num1 = Number(prompt("enter first number: "))
// var num2 = Number(prompt("Enter last number: ")) 

var a = 3
var d = 5
var n = 100
var nthTerm = a + (n-1)* d
var sum = 0
for (; a<=nthTerm ; a=a+5){
    sum = sum+a;
}
    console.log("sum of the series up to 100th term:  " ,sum)