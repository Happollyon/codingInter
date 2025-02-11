/**
 * Write a function that accepts a positive number N.

The function should console log a pyramid shape with N levels using the # character.  
Make sure the pyramid has spaces on both the left *and* right hand sides.

Examples

pyramid(1);
//      '#'
 
pyramid(2);
//      ' # '
//      '###'
 
pyramid(3);
//      '  #  '
//      ' ### '
//       #####
 */

// user recursing
// exit condition
// find condition to print space and to print #

function pyramid(n){
   let chars =2*n-1
   let mid = Math.floor(chars/2)
   
   for(let i =0; i<n;i++){ //level
        let level =''
        //n chars 
        for(let j=0;j<chars;j++){
            if((mid-i)<=j && (mid + i)>=j){
                level = level + "#"
            }else{
                level =level + " "
            }
            
        }
        console.log(level)
   }
}

//pyramid(1);
//pyramid(2);
pyramid(3);