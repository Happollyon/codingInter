/**
 * Coding Exercise - Queue
Note: I recommend you work on this exercise while watching the next video - it will walk you through a solution!

Create a queue data structure. 

The queue should be a class with methods 'add' and 'remove'

Adding to the queue should store an element until it is removed

Example

const q = new Queue();
q.add(1);
q.remove(); // returns 1;
 */

class Queue{
    cosntructor(){
        this.data = []
    }

    add(val){
        this.data.unshift(val)
    }

    remove(){
     return   this.data.pop()
    }

}
