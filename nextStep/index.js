/*
Coding Exercise - Steps
Write a function that accepts a positive number N. 
The function should console log a step shape with N levels using the # character.  
Make sure the step has spaces on the right hand side!

Examples

steps(2);
//    '# '
//    '##'
 
steps(3)
//    '#  '
//    '## '
//    '###'
 
steps(4)
//    '#   '
//    '##  '
//    '### '
//    '####'
*/

function steps(n){
    // base shoud be n
    
    for(let i = 1; i<=n;i++){
        let level=''
        let spaces = n-i
       
        for(let j = 1 ;j<=n; j++){
            if(j+spaces<=n){
                level = level + '#'
            }else{
                level = level + ' '
            }
        }
        console.log(level)
    }

}
steps(2)
steps(3)
steps(4)