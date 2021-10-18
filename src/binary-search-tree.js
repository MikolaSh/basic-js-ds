const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/

class Node{
  constructor(data){
    this.data = data;
    this.left = null;
    this.right = null;
  }
}
module.exports = class BinarySearchTree {
  constructor(){
    this.rootValue = null;
  }


  root() {
    if(this.rootValue===null){
      return null;
    }else{
      console.log(this.rootValue)
      return this.rootValue;
    }
  }

  insertNode(node, newNode){
    if(newNode.data < node.data){
      if(node.left === null){
        node.left = newNode;
      }else{
        this.insertNode(node.left, newNode)
      }
    }else{
      if(node.right === null){
        node.right = newNode;
      }else{
        this.insertNode(node.right, newNode)
      }
    }
  }

  add( data ) {
    let newNode = new Node(data);

    if(this.rootValue === null){
      this.rootValue = newNode;
      console.log(this.rootValue);
    }else{
      this.insertNode(this.rootValue, newNode);
    }
  }

  has( data ) {
    if(this.rootValue === data){
      return true;
    }else{
      return this.hasValue(this.rootValue, data)
    }
  }
  hasValue(node, data){
    if (node === null){
      return false;
    }else if(data < node.data){
      return this.hasValue(node.left, data);
    }else if(data > node.data){
      return this.hasValue(node.right, data);
    }else{
      return true;
    }
  }


  find( data ) {
    if(this.rootValue===data){
      return this.rootValue;
    }else{
      return this.findValue(this.rootValue,data)
    }
  }

  findValue(node, data){
    if (node === null){
      return null;
    }else if(data < node.data){
      return this.findValue(node.left, data);
    }else if(data > node.data){
      return this.findValue(node.right, data);
    }else{
      return node;
    }
  }

  remove( data ) {
    this.rootValue = this.removeNode(this.rootValue, data);
  }
  removeNode(node, data){
    if(node === null){
        return null;
    }else if( data < node.data){
        node.left = this.removeNode(node.left, data);
        return node;
    }else if( data > node.data){
        node.right = this.removeNode(node.right, data);
        return node;
    }else{
        if(node.left ===null && node.right ===null){
            node = null;
            return node;
        }

        if(node.left === null){
            node = node.right;
            return node;
        }else if(node.right === null){
            node = node.left;
            return node;
        }

        let newNode = this.minNode(node.right);
        node.data = newNode.data;
        node.right = this.removeNode(node.right, newNode.data);
        return node;

    }
  }
minNode(node){
    if(node.left === null){
        return node;
    }else{
        return this.minNode(node.left)
    }
}

  min() {
    return this.minValue(this.rootValue.left)
  }

  minValue(node){
      if(node.left === null){
          return node.data
      }else {  
          return this.minValue(node.left)
      }
  }

  max() {
    return this.maxValue(this.rootValue.right)
  }
  maxValue(node){
    if(node.right === null){
        return node.data;
    }else{
        return this.maxValue(node.right);
    }
  }
}