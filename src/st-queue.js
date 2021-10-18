const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */

class Node{
  constructor(data){
    this.value = data;
    this.next = null;
  }
}
module.exports = class Queue {
  constructor(){
    this.head = null;
  }


  getUnderlyingList() {
    return this.head;
  }

  enqueue( value ) {
    let newNode = new Node(value)
    if(this.head === null){
      this.head = newNode
    }else{
      this.addElem(this.head, newNode)
    }
  }
  addElem(node, value){
    if(node.next===null){
      node.next = value;
    }else{
      this.addElem(node.next, value);
    }
  }
  dequeue() {
    console.log(this.head.value)
    let temp = this.head.value;
    this.head = this.head.next;
    console.log(temp)
    return temp;

  }

}
