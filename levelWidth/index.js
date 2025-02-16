function levelWidth(root) {
    
    let arr =[]
    let result =[]
    arr.push(root)
    result.push(1)
    let sum=0
    let count=0
    //console.log("arr= "+ arr +" result= "+ result)
    while(arr.length>0){
        let current = arr.shift()
        count++
        current.children?arr=[...arr,...current.children]:null
        sum+=current.children?current.children.length:0
        //console.log("count "+count+" last level "+result[result.length-1])
        if(count === result[result.length-1] && sum != 0){
          count=0
          result.push(sum)
          sum=0
        }

     
    }
   //console.log(result)
    return result
}

// You shouldn't need to modify this class
class Node {
  constructor(data) {
    this.data = data;
    this.children = [];
    
  }

  add(data) {
    this.children.push(new Node(data));

  }
}

const root = new Node(0);
  root.add(1);
  root.add(2);
  root.add(3);
  root.children[0].add(4);
  root.children[2].add(5);

levelWidth(root)