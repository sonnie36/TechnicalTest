// Write a program to generate the Fibonacci sequence up to 100.

let num1 = 0, num2= 1, nextTerm;

console.log('Fibonacci Series:');
console.log(num1); 
console.log(num2); 

nextTerm = num1 + num2;

while (nextTerm <= 100) {
    console.log(nextTerm);
    num1 = num2;
    num2 = nextTerm;
    nextTerm = num1 + num2;
}