/* 
Coding Exercise - Capitalization
Write a function that accepts a string. 
the function should capitalize the first letter of each word in the string and return the result.

Examples:

capitalize('a short sentence') --> 'A Short Sentence'
capitalize('a lazy fox') --> 'A Lazy Fox'
capitalize('look, it is working!') --> 'Look, It Is Working!'

**/

function capitalize(str){
    // first word is always the first char and first char after space
    let newStr = [] // appending to string is o N. Thus, appending to array is faster.
    for(let i = 0; i<str.length; i++){
        if(i==0){
            newStr.push(str[i].toUpperCase())
            continue
        }if(str[i-1]==" "){
            newStr.push(str[i].toUpperCase())
            continue
        }
        newStr.push(str[i])
    }    
    // time complexity is O(n) where n is the length of the string 
    return newStr.join('')
}



capitalize('a short sentence')// --> 'A Short Sentence'
capitalize('a lazy fox')// --> 'A Lazy Fox'
capitalize('look, it is working!') //--> 'Look, It Is Working!'