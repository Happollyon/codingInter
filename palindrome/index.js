/**
 * -- Directions
 * 
 * given a string, return true if the string is a palindrome or false if its not
 * # include spaces and ponctuations in determining if th estring is a palidtomr 
 * 
 * -- examples
 * 
 * abba === true
 * abcdefg === false
 */

function palindrome(str){
    let len = str.length
    for(let i = 0; i<len;i++){
       if(str[i] === str[len-(i+1)]){
        continue
       }else{
            return false
       }
    }
    return true
}

palindrome('abba')
palindrome('abcdefg')