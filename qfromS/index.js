/**
 * Coding Exercise - Queue From Stacks
Implement a Queue data structure using two stacks.

Do not create an array inside of the 'Queue' class.

Queue should implement the methods 'add', 'remove', and 'peek'.

For a reminder on what each method does, look back at the Queue exercise.

Examples:

    const q = new Queue();
    q.add(1);
    q.add(2);
    q.peek();  // returns 1
    q.remove(); // returns 1
    q.remove(); // returns 2
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

    class Queue{
        constructor(){
            this.data1= new Stack()
            this.data2= new Stack()
        }

        add(val){
            this.data1.push(val)
        }
        remove(){
            let removeVal
            while(this.data1.peek()){
                let val = this.data1.pop()
                this.data2.push(val)
            }
            removeVal = this.data2.pop()
            while(this.data2.peek()){
                let val = this.data2.pop()
                this.data1.push(val)
            }
            return removeVal
            
        }

        peek(){
            let peekVal
            while(this.data1.peek()){
                let val = this.data1.pop()
                this.data2.push(val)
            }
            peekVal = this.data2.peek()
            while(this.data2.peek()){
                let val = this.data2.pop()
                this.data1.push(val)
            }
            return peekVal
        }
    }
    const q =new Queue()
    q.add(1);
    q.add(2);
    console.log(q.peek());  // returns 1
    console.log(q.remove()); // returns 1
    console.log(q.remove()); // returns 2