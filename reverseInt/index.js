/** 
 * -- Directions
 * 
 * Given an integer, return an integer that is the reverse
 * ordering of numbers
 * 
*/

function reverseInt(n){
    let revInt=[]
    if(n<0){
        n =n*-1
        revInt = ["-"]
    }
    n = n.toString()
    for(let i = n.length -1; i >=0; i--){
        revInt.push(n[i])
    }
    
    return parseInt(revInt.join(''))
}

reverseInt(-15) //51
reverseInt(123) //321
reverseInt(-8790) //0978
reverseInt(1511) //1151
