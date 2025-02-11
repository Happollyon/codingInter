/**
 * Coding Exercise - Implementing Stacks
Create a stack data structure. 

The stack should be a class with methods push, pop, and peek

Adding an element to the stack should store it until it is removed.

Example

const s = new Stack();
s.push(1);
s.push(2);
s.pop(); // returns 2
s.pop(); // retur
 */


class Stack{
    constructor(){
        this.data = []
    }

    push(val){
        this.data.unshift(val)
    }
    pop(){
        return this.data.shift()
    }
    peek(){
        return this.data[0]
    }
}

const s = new Stack();
s.push(1);
s.push(2);
console.log(s.peek())
console.log(s.pop()); // returns 2
console.log(s.pop()); // return 1
