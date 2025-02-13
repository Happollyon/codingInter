/**
 * Coding Exercise - From Last
Given a linked list and integer n, return the element n spaces from the last node in the list. 

Do not call the 'size' method of the linked list

Assume that n will always be less than the length of the list.

Example

   const list = new LinkedList();
 
   list.insertLast('a'); 
   list.insertLast('b');
   list.insertLast('c');
   list.insertLast('d');
   list.insertLast('e');
   list.insertLast('f');
   list.insertLast('g');
 
   2 
   fromLast(list, 2).data // 'b'
 */


import { LinkedList,Node } from "../linkedlist/index.js";

function fromLast(list,space){
   let slow = list.head
   let fast = list.head
   let spacew = space
   let slowMoves = 0
   let fastMoves = 0

   while(true){

        if(fast.next && fast.next.next){
         fast = fast.next.next
         slow =  slow.next
         slowMoves+=1
         fastMoves+=1
        }else if(fast.next&& (((fastMoves*2)+1)-spacew)==slowMoves){
         return slow
        }else if((fastMoves * 2 ) - spacew ==slowMoves){
         
         return slow
        }else{
      
         //console.log("slow: "+slowMoves + " fast: "+fastMoves+ " calc "+ ((fastMoves * 2 )-spacew))
        
         if(((fastMoves * 2 )-spacew)< slowMoves)
         { //console.log("here")
            slowMoves=0
            slow=list.head
            //console.log(slow)
         }
        
         slow =slow.next
         slowMoves+=1
        }


   }

}

   const list = new LinkedList();
 
   list.insertLast('a');
   list.insertLast('b');//s
   list.insertLast('c');//s
   list.insertLast('d');
   list.insertLast('e');//f
   list.insertLast('f');
   //list.insertLast('g');
 
   console.log(fromLast(list,2).data) // 'b'