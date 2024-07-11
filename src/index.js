class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    append(value) {
        const newNode = new Node(value);
        if(!this.head){
            // If the list is null/empty, the new node is both the head and tail
            this.head = newNode;
            this.tail = newNode;
        }else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
    }

    prepend(value) {
        const newNode = new Node(value);
        if(!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
    }

    size(){
        let i = 0;
        let currentNode = this.head;
        while(!this.head){
            i++;
            currentNode = currentNode.next;
        }
        return i;
    }

    head(){
        if(this.head){
            const headNode = this.head;
            return headNode;
        } else {
            return null;
        }
    }

    tail(){
        if(this.tail){
            const tailNode = this.tail;
            return tailNode;
        } else {
            return null;
        }
    }
}

