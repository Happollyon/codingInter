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

const n = new Node(4)
n.insert(3)
n.insert(4)
n.insert(6)
n.insert(88)
n.insert(0)
n.insert(-1)
n.insert(-4)
n.insert(1)
n.insert(8)
n.insert(-33)

console.log(n.contains(-4))
