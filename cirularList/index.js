import { LinkedList,Node } from "../linkedlist/index.js";

/**
 * Coding Exercise - Circular
Given a linked list, return true if the list is circular, false if it is not.

Example

  const l = new LinkedList();
  const a = new Node('a');
  const b = new Node('b');
  const c = new Node('c');
 
  l.head = a;
  a.next = b;
  b.next = c;
  c.next = b;
 
  circular(l) // true
 */

  function circular(list){

    let slow= list.head
    let fast = list.head

    while(fast.next.next && slow.next){
        if(slow.next === fast.next.next){
            return true
        }
        slow = slow.next
        fast = fast.next.next
        if(!fast.next){
            return false
        }

    }
    return false

  }


  const l = new LinkedList();
  const a = new Node('a');
  const b = new Node('b');
  const c = new Node('c');
 
  l.head = a;
  a.next = b;
  b.next = c;
  c.next = b;
 
  console.log(circular(l)) // true