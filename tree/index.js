/**
 * Coding Exercise - Node Implementation

Create a node class. 

The constructor should accept an argument that gets assigned to the data property and initialize an empty array for storing children

The node class should have methods add and removeCoding Exercise - Node Implementation
Note: I recommend you watch the next two following videos as you implement this!

Create a node class. 

The constructor should accept an argument that gets assigned to the data property and initialize an empty array for storing children

The node class should have methods add and remove
 */

class Node{

    constructor(data){
        this.data = data  //
        this.children = []
    }

    add(data){
        this.children.push(new Node(data))   
    }
    remove(data){
        this.children = this.children.filter(Element=>{
           return Element.data !== data 
        })
    }
}

class Tree{
    constructor()
    {
        this.root = null
    }
    traverseBF(func){
        let starter = []
        starter.push(this.root)

        while(starter.length >0){
            let n = starter.shift()
            func(n)
            starter =[...starter,...n.children]
            //console.log(starter)
        }
        console.log("done")
    }
}

const t = new Tree()
const n = new Node('root')
n.add("a")
n.add("b")
n.add("c")
function func(n){
    console.log(n.data)
}
t.root = n

t.traverseBF(func)