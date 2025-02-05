/**
 *  -- directions
 * 
 * given a  string, retunr the character that is most 
 * commonly used in the string
 * 
 * --examples abccccccd = c
 * apple 123 111111 =
 */


function maxChar(str){
    let obj ={}
    for (let i =0; i <str.length;i++){        
        if(str[i] in obj){
            obj[str[i]] =  obj[str[i]] + 1
        }else{
            obj[str[i]] = 1
        }
    }
    let char
    let val = 0
    for(var key in obj){
        //console.log(obj[key])
        if(obj[key]>val){
            char= key
            val = obj[key]
        }
    }
    return char
}

maxChar('abccccccd') //c
maxChar('apple 123 111111') //1