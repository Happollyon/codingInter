/***
 * 
 * Given an array and chunk size, divide the array
 * into many subarrays where each subarray is of the 
 * provided size.
 * 

Examples:

 // Chunk size two:
 chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
 
 // Chunk size two:
 chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
 
 // Chunk size 3:
 chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
 
 // Chunk size 4:
 chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
 
 // Chunk size 10:
 chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]***/

 function chunk(array, size){
    
    let newArray = []
    let sizeOfArray = array.length
    let tempArray = []
    let count=0
    let arrayCount = 0

    if(sizeOfArray < size){
        newArray[arrayCount]=array
        
        return newArray
    }
    for(let i = 0; i<sizeOfArray; i++ ){
        tempArray.push(array[i])
        count++
        if(count==size){
            newArray[arrayCount]=tempArray
            tempArray=[]
            count = 0
            arrayCount++
            continue
        }if(count!=size && (i+1 == sizeOfArray)){
            newArray[arrayCount]=tempArray
        }
        
    }

    
    return newArray
    // return arraycd 
 }
 chunk([1, 2, 3, 4], 2)// [1,2],[3,4]
 chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) //[1,2,3][4,5,6][7,8]
 chunk([1, 2, 3, 4, 5], 10) // [1,2,3,4,5]