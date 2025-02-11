
/**
 * 
 * Coding Exercise - Peek
Implement a 'peek' method in this Queue class. 

Peek should return the last element (the next one to be returned) from the queue without removing it.

Example

const q = new Queue();
q.add(1);
q.add(2);
 
q.peek(); // 1
 */

class Queue{
    constructor(){
        this.data =[]
    }

    add(val){
        this.data.unshift(val)
    }

    remove(){
       return this.data.pop()
    }

    peek(){
        return this.data[this.data.length-1]
    }
}

// let q = new Queue()
// q.add(1)
// q.add(2)

// console.log(q.peek())
// console.log(q.remove())

/**
 * Coding Exercise - Weave
Implement the 'weave' function. 

Weave receives two queues as arguments and combines the contents of each into a new, third queue

The third queue should contain the alternating content of the two queues

The function should handle queues of different lengths without inserting 'undefined' into the new one

Do not access the array inside of any queue, only use the add, remove, and peek functions

Example

const queueOne = new Queue();
queueOne.add(1);
queueOne.add(2);
 
const queueTwo = new Queue();
queueTwo.add('Hi');
queueTwo.add('There');
 
const q = weave(queueOne, queueTwo);
 
q.remove() // 1
q.remove() // 'Hi'
q.remove() // 2
q.remove() // 'There'
 */

function weave(q1,q2){
    const q = new Queue()

   while(q1.peek()|| q2.peek()){
        //console.log(q1.remove() +"  "+ q2.remove())
        if(q1.peek()){
            q.add(q1.remove())
        }if(q2.peek()){
            q.add(q2.remove())
        }
   }
   return q
}

const queueOne = new Queue();
queueOne.add(1);
queueOne.add(2);
 
const queueTwo = new Queue();
queueTwo.add('Hi');
queueTwo.add('There');
 
const q = weave(queueOne, queueTwo);
 
console.log(q.remove())// 1
console.log(q.remove())// 'Hi'
console.log(q.remove())// 2
console.log(q.remove())// 'There'


