//* 
// Directions
// write a program that prings the numbers from 1 to n. but for multiples of three print
// fizz  instead of the number and ofr the multiples of 5 prints buss. for numbers which are muiltiples
// of both, print fizzbuzz
// 
// exampel fizzbuzz(5)
// 1
// 2
// fizz
// 4
// buzz**/


function fizzbuzz(n){
    // time complexity is n or linear
    // we must interate over values between 1 to n once.
    for(let i = 1; i<=n; i++){
        let val =''
        
        if(i%3===0){
            val='fizz'
        }if(i % 5 ===0){
            val = val + 'buzz' 
        }if(val ===''){
            val = i
        }
        
        console.log(i+" : "+val)
    }
}

fizzbuzz(15)