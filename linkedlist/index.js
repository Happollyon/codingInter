

class Node{
    constructor(data,next){
        this.data=data
        this.next= next?next:null
    }
}

class LinkedList{
    constructor(){
        this.head = null
    }
    //Creates a new Node from argument 'data' and assigns the resulting node to the 'head' property.
    // Make sure to handle the case in which the linked list already has a node assigned to the 'head' property.

    insertFirst(data){
        const NewNode = new Node(data,this.head)
        this.head = NewNode
    }
    //Returns the number of nodes in the linked list.
    size(){
        let counter = 0
        if(this.head==null){
            return counter
        }else{
            counter++
            let node = this.head
            while(node.next!=null){
                counter++
                node = node.next
            }
            return counter
        }
    }
    
    //Returns the last node of the linked list
    getFirst(){
        return this.head
    }

    //Returns the last node of the linked list.
    getLast(){
        let node =this.head
        while(node){
            if(node.next===null){
                return node
            }
            node = node.next
        }
    }
}


const list = new LinkedList();
list.insertFirst('a');
list.insertFirst('b');
list.insertFirst('c');
console.log(list.size()); // returns 3
console.log(list.getFirst());
