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
            // If the list is empty, the new node is both the head and tail
            this.head = newNode;
            this.tail = newNode;
        }else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
    }
}

