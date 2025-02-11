/**
 * Check to see if two provided strings are anagrams of each other.
 *  One string is an anagram of another if it uses the same characters in the same quantity.

Only consider characters, not spaces or punctuation

Consider capital letters to be the same as lower case

Examples:

anagrams('rail safety', 'fairy tales') === true
anagrams('RAIL! SAFETY!', 'fairy tales') === true
anagrams('Hi there', 'Bye there') === false

*/

function anagrams(stringA, stringB) {
    let newStringA = stringA.replace(/[^a-zA-Z0-9]/g,'').toLowerCase()
    let newStringB = stringB.replace(/[^a-zA-Z0-9]/g,'').toLowerCase()

    let charMapA = {}
    let CharMapB = {}

    if(newStringA.length !=newStringB.length){
        console.log(false)
        return 
    }
    for(let i = 0; i<newStringA.length; i++){
        
        if(!charMapA[newStringA[i]]){
            charMapA[newStringA[i]]=1
        }else{
            charMapA[newStringA[i]] =+ 1
        }
        if(!CharMapB[newStringB[i]]){
            CharMapB[newStringB[i]] = 1
        }else{
            CharMapB[newStringB[i]] = +1
        }
    }

    for(let key in charMapA){
        if(!CharMapB[key]){
            return false
        }if(CharMapB[key]!=charMapA[key]){
            return false
        }
    }
   
    return true
}

anagrams('rail safety', 'fairy tales') //=== true
anagrams('RAIL! SAFETY!', 'fairy tales') //=== true
anagrams('Hi there', 'Bye there') //=== false