/**
 * Coding Exercise - Midpoint
Return the 'middle' node of a linked list.

If the list has an even number of elements return the node at the end of the first half of the list.

Do not use a counter variable

Do not retrieve the size of the list

Only iterate through the list one time

Example:

  const l = new LinkedList();
  l.insertLast('a')
  l.insertLast('b')
  l.insertLast('c')
  midpoint(l); // returns { data: 'b' }
 */
  import { LinkedList } from "../linkedlist/index.js";

  function midpoint(list){
    let slow= list.head
    let fast= list.head
    for(let node of list){
       if(fast.next){
        fast = fast.next
       }
       if(fast.next){
        slow = node.next
        fast = fast.next
       }else{
        return slow
       }
    
    }
    
  }

  const l = new LinkedList();
  l.insertLast('a')
  l.insertLast('b')
  l.insertLast('c')
  l.insertLast('d')
  console.log(midpoint(l).data); // returns { data: 'b' }


  /**
   *  a  b  c
   * 
   * f=a
   * s=a
   * 
   * a=b
   */