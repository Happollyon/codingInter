/**
 * 
 * Coding Exercise - Fibonacci Series
Print out the n-th entry in the fibonacci series. T
he fibonacci series is an ordering of numbers where 
each number is the sum of the preceeding two.

For example, the sequence:

[0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
forms the first ten entries of the fibonacci series.

Example
fib(4) === 3; 
fib(7) === 13;
*/

function fib(n){

    let a = 0
    let b =1

    for (let i = 2; i<=n;i++){

        let tempB =b
        b = a+b
        a = tempB
        
    }
    return b;
}

function fibRecursive(n){
    
    if(n<2){
         console.log(n)
        return n
    }
    
    return fibRecursive(n-1) + fibRecursive(n-2)
}
fibRecursive(4)
//fibRecursive(7)
//fib(4)
//fib(7)