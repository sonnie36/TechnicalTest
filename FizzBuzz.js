// Write a program that prints the numbers from 1 to 100. For multiples of 3, print "Fizz"; for 
// multiples of 5, print "Buzz"; and for numbers that are multiples of both 3 and 5, print 
// "FizzBuzz".

let x = 1;
while (x<=100){
    // console.log(x);
    x+=1;
    if(x%3===0 && x%5===0){
        console.log(x);
        console.log("FizzBuzz");
    }
    else if(x%3 === 0){
        console.log(x);
        console.log("Fizz");
    }
    else if(x%5 === 0){
        console.log(x);
        console.log("Buzz");
    }
  

}