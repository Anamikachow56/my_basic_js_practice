// Question 1:
// Write a code that takes two numbers, the first and last numbers of a series, as input from the user. The program should then calculate 
// and display the sum of all the numbers in that series. For example:
// If the user inputs 3 and 8, the program should calculate and print the sum: 3 + 4 + 5 + 6 + 7 + 8.
// If the user inputs 1 and 10, the program should calculate and print the sum: 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10.

var prompt =require('prompt-sync')();
var num1 = Number(prompt("enter first number: "))
var num2 = Number(prompt("Enter last number: ")) 

var sum =0
for (; num1 <=num2 ; num1++){
    sum= sum + num1;
}
    console.log("the sum of the series:  " ,sum)

// Question 2:
// Write a code to calculate and display the sum of all even numbers between 1 and 500.
var i = 2
var sum = 0
for (i=2; i<=500 ; i=i+2){
    sum = sum+i;
}
    console.log("sum of even numbers:  " ,sum)

     
// Question-3:
// Write a code to calculate and display the sum of all odd numbers between 1 and 500.
var i = 1
var sum = 0
for (i=1; i<=500 ; i=i+2){
    sum = sum+i;
}
    console.log("sum of odd numbers:  " ,sum)

//  Question-4:
// Suppose we have a series: 3+8+13+........  
// Find the 100th term of this series. The code will display the value of the 100th term of this series. 
// You can use the formula: nth_term = a + (n-1) d 
// Display the sum of the series up to the 100th term. 
var a = 3
var d = 5
var n = 100
var nthTerm = a + (n-1)* d
var sum = 0
for (; a<=nthTerm ; a=a+5){
    sum = sum+a;
}
console.log("the nth term is: " , nthTerm)
    console.log("sum of the series up to 100th term:  " ,sum)



