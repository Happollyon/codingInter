

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

    //Empties the linked list of any nodes.

    clear(){
        this.head = null
    }
    //Removes only the first node of the linked list. The list's head should now be the second element.
    removeFirst(){
        this.head = this.head.next
    }
    
    //Removes the last node of the chain
    removeLast(){
        let count = 1
        let size = this.size()
        let node = this.head
        while(node){
            if(count === size-1 ){
                node.next=null 
            }if((size === 1 && node.next === null)){
                this.head = null
                return
            }
            node = node.next
            count++
        } 
    }

    //Inserts a new node with provided data at the end of the chain
    insertLast(data){
        let node = this.head
        if(!node){
            this.head = new Node(data,null)
        }
        while(node){
            if(node.next===null){
                node.next=new Node(data,null)
                return
            }
            node = node.next
        }
        
    }

    //Returns the node at the provided index
    getAt(data){
        let count = 0;
        let node = this.head
        
        while(node){
            if(count===data){
                return node
            }
            count++
            node =node.next
        }
        return null
    }
}


const l = new LinkedList();

    l.insertLast(1);
    l.insertLast(2);
    l.insertLast(3);
    l.insertLast(4);
    console.log(l.getAt(0).data)