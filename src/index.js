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

    at(index){
        if (index < 0) return null; // Index should be non-negative
        if(this.head) {
            let currentNode = this.head;
            let i = 0;
            while(i < index){
                i++;
                currentNode = currentNode.next;
            }
            return currentNode ? currentNode : null; // Return the node if found, else null
        }
    }

    pop(){
        if (!this.tail) {
            console.log("No item to pop");
            return null;
        }

        const poppedValue = this.tail.value;

        if (this.head === this.tail) {
            // If there's only one node in the list
            this.head = null;
            this.tail = null;
            return poppedValue;
        }

        let currentNode = this.head;
        while(currentNode.next !== this.tail){
            currentNode = currentNode.next;
        }
        // Now currentNode is the second-to-last node
        currentNode.next = null;
        this.tail = currentNode;

        return poppedValue;
    }

}

