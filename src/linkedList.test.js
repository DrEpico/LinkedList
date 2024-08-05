import { Node, LinkedList } from ".";

// Example usage:
const list = new LinkedList();
list.append(1);
list.append(2);
list.append(3);
list.prepend(0);

list.insertAt(1.5, 2);
console.log('LinkedList:', list.toString()); // Output: ( 0 ) -> ( 1 ) -> ( 1.5 ) -> ( 2 ) -> ( 3 ) -> null

list.removeAt(2);
console.log('LinkedList after removal:', list.toString()); // Output: ( 0 ) -> ( 1 ) -> ( 2 ) -> ( 3 ) -> null

list.removeAt(0);
console.log('LinkedList after removing head:', list.toString()); // Output: ( 1 ) -> ( 2 ) -> ( 3 ) -> null

list.removeAt(2);
console.log('LinkedList after removing tail:', list.toString()); // Output: ( 1 ) -> ( 2 ) -> null