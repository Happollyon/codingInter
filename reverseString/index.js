/**
 * DIRECTIONS
 * 
 * given a string, return a new string with the reversed order of chars
 * -- Exampes:
 *  reverse('apple') === 'elppa' 
 *  reverse('hello') === 'olleh'
 *  reverse('greetings!') === '!sgniteerg'
 */

function reverse(string){
    let rev = ''
    for(let i = string.length - 1; i>=0; i--){   
        rev = rev+string[i]
    }
    return rev
}

//O(n) linear time
reverse('apple') 
reverse('hello')
reverse('greetings!')