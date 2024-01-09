const prompt = require('prompt-sync')();
let a=Number(prompt("Enter first number: "))
let b=Number(prompt("Enter second number: "))
var add=0;
var sub=0;
var mul=0;
var div=0;
let c=Math.random();
console.log("Random number is "+c)
console.log(" ")
if(c<0.1){
    add=a-b;
    sub=a/b;
    mul=a+b;
    div=a**b;
    console.log("addition is "+add);
    console.log(" ")
    console.log("Subtraction is "+sub);
    console.log(" ")
    console.log("Multiplication is "+mul);
    console.log(" ")
    console.log("Division is "+div);
    console.log(" ")
}
else{
    add=a+b;
    sub=a-b;
    mul=a**b;
    div=a/b;
    console.log("addition is "+add);
    console.log(" ")
    console.log("Subtraction is "+sub);
    console.log(" ")
    console.log("Multiplication is "+mul);
    console.log(" ")
    console.log("Division is "+div);
    console.log(" ")
}

