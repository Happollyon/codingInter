/**
 * 
 * Coding Exercise - Finding Vowels
Write a function that returns the number of vowels used in a string.

Vowels are the characters a, e, i, o, and u

Examples

vowels('Hi There!'); --> 3
vowels('Why do you ask?'); --> 4
vowels('Why?'); --> 0

 */

function vowels(str){
    str = str.toLowerCase()
    str = str.split('')
    let count=0
    str.forEach(element => {
        
        if(element=='a'||element=='e'||element=='i'||element=='o'||element=='u'){
            count += 1;
        }
    });

console.log(count)
}

vowels('Hi There!'); // --> 3
vowels('Why do you ask?'); //--> 4
vowels('Why?'); //--> 0