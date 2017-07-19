let fibonacci = n => ((n == 0) || (n == 1)) ? 1 : fibonacci(n - 1) + fibonacci(n - 2);
//Calculates every Fibonacci's number in the sequence. 

let print = x => console.log(x);
//Prints the argument.

Array.apply(null, {length: 5}).map(Number.call, Number).map(fibonacci).forEach(print);
//Creates an array of numbers, applies the fibonacci function with map to the array and finally, print every element with foreach.
