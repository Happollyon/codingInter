

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

    //Removes node at the provided index
    removeAt(val){
        let count = 0;
        let node = this.head
        let toDelete =  this.getAt(val)
        if(toDelete === null){
            return
        }

        while(node){
             if(val === 0 && count===0){
                this.head = toDelete.next
                 return
             }
            if(count === val - 1 ){
                node.next=toDelete.next
                return    
            }
            count++
            node = node.next
        }
    }

    //Create an insert a new node at provided index. 
    // If index is out of bounds, add the node to the end of the list.
    insertAt(data,val){
        let counter = 0
        //let nodeAtIndex = this.getAt(val)
        let node = this.head
        if(val>this.size()){
            this.insertLast(data)
            return
        }
       
        while(node)
        {   
            if(val === 0 && counter===0){
            let newNode = new Node(data,this.head)
            this.head = newNode
             return
            }
            if(counter===val-1){
                let newNode = new Node(data,node.next)
                node.next = newNode
                return
            }
            counter++
            node = node.next
            
        }
        this.head = new Node(data,null)

    }

    //Calls the provided function with every node of the chain

    forEach(func){
        let node = this.head
        
        while(node){
            func(node)
            node=node.next
        }
    }

    //Linked list should be compatible as the subject of a 'for...of' loop
    *[Symbol.iterator](){
        let node = this.head;
        while(node){
            yield node;
            node = node.next;
        }
    }
}

const list = new LinkedList();

list.insertLast(1);
list.insertLast(2);
list.insertLast(3);
list.insertLast(4);

for (let node of list) {
node.data += 10;
}

console.log(list.getAt(1).data) // returns node with data 11