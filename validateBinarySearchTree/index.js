/*Given a node of a binary search tree, validate the binary search tree.

Ensure that every node's left hand child is less than the parent node's value

Ensure that every node's right hand child is greater than the parent*/
/**
 * Implement the Node class to create a binary search tree.  
 * The constructor should initialize values 'data', 'left', and 'right'.
 * 
 * Implement the 'insert' method for the Node class.  In
 * sert should accept an argument 'data', then create an insert a new node at the appropriate location in the tree.
 * 
 * Implement the 'contains' method for the Node class.  
 * Cotains should accept a 'data' argument and return the Node in the tree with the same value.
 */

class Node{
    constructor(data){
        this.data = data
        this.left=null
        this.right = null
    }
    insert(data){
       if(data > this.data && this.right){
        this.right.insert(data)
       }else if(data>this.data){
        this.right = new Node(data)
       }

       if(data < this.data && this.left){
        this.left.insert(data)
       }else if(data<this.data){
        this.left =  new Node(data)
       }
    }

    contains(data){
        
        if(data > this.data && this.right){
            return this.right.contains(data)
        }else if(data<this.data && this.left){
            return this.left.contains(data)
        }else if(data ===  this.data){
           
            return this;
        }else{
            return null
        }
    }
}

const n = new Node(10)
n.insert(5)
n.insert(8)
n.insert(15)
n.insert(20)
n.insert(21)
n.insert(3)
n.insert(6)
n.insert(1)



function validate(node, min = null, max = null) {
    
    
    if(max != null && node.data > max){
        console.log(false)
        return false

    }else if(min != null && node.data < min){
        console.log(false)
        return false

    }else if(node.right && !validate(node.right,null,node.data)){
        console.log(false)
        return false

    }else if(node.left && !validate(node.left,node.data,null)){
        console.log(false)
        return false
    }
    //console.log(true)
    return true
    
}

validate(n,null,null)