class Node {
    constructor(value) {
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
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
    }

    prepend(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
    }

    size() {
        let count = 0;
        let currentNode = this.head;
        while (currentNode) {
            count++;
            currentNode = currentNode.next;
        }
        return count;
    }

    getHead() {
        return this.head ? this.head.value : null;
    }

    getTail() {
        return this.tail ? this.tail.value : null;
    }

    at(index) {
        if (index < 0) return null;
        let currentNode = this.head;
        let i = 0;
        while (currentNode && i < index) {
            i++;
            currentNode = currentNode.next;
        }
        return currentNode ? currentNode.value : null;
    }

    pop() {
        if (!this.tail) {
            console.log("No item to pop");
            return null;
        }

        const poppedValue = this.tail.value;

        if (this.head === this.tail) {
            this.head = null;
            this.tail = null;
            return poppedValue;
        }

        let currentNode = this.head;
        while (currentNode.next !== this.tail) {
            currentNode = currentNode.next;
        }
        currentNode.next = null;
        this.tail = currentNode;

        return poppedValue;
    }

    contains(value) {
        let currentNode = this.head;
        while (currentNode) {
            if (currentNode.value === value) {
                return true;
            }
            currentNode = currentNode.next;
        }
        return false;
    }

    find(value) {
        let currentNode = this.head;
        let i = 0;
        while (currentNode) {
            if (currentNode.value === value) {
                return i;
            }
            currentNode = currentNode.next;
            i++;
        }
        return -1;
    }

    toString() {
        let output = "";
        let currentNode = this.head;
        while (currentNode) {
            output += `( ${currentNode.value} ) -> `;
            currentNode = currentNode.next;
        }
        return output + "null";
    }

    insertAt(value, index) {
        if (index < 0) return null;

        const newNode = new Node(value);

        if (index === 0) {
            newNode.next = this.head;
            this.head = newNode;
            if (!this.tail) {
                this.tail = newNode;
            }
            return true;
        }

        let currentNode = this.head;
        let i = 0;

        while (currentNode && i < index - 1) {
            currentNode = currentNode.next;
            i++;
        }

        if (!currentNode) return false;

        newNode.next = currentNode.next;
        currentNode.next = newNode;

        if (!newNode.next) {
            this.tail = newNode;
        }

        return true;
    }

    removeAt(index) {
        if (index < 0 || !this.head) return null;

        if (index === 0) {
            const removedValue = this.head.value;
            this.head = this.head.next;
            if (!this.head) {
                this.tail = null;
            }
            return removedValue;
        }

        let currentNode = this.head;
        let i = 0;

        while (currentNode.next && i < index - 1) {
            currentNode = currentNode.next;
            i++;
        }

        if (!currentNode.next) return null;

        const removedValue = currentNode.next.value;
        currentNode.next = currentNode.next.next;

        if (!currentNode.next) {
            this.tail = currentNode;
        }

        return removedValue;
    }
}

module.exports = LinkedList;
