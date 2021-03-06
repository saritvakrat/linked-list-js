let Node = require('./node');
/**
 * We can add, remove and search nodes
 */
module.exports = class LinkedList {
    constructor() {
        // link to the first node in Linked list
        this.head = null;
        // num of nodes in the in Linked list
        this.length = 0;
    }

    /**
     * @param {*} value - the value of the added Node
     * @summary Big O complexity == n
     */
    addToTheEndOfList(value) {
        let node = new Node(value);

        if (this.length === 0)
            this.head = node; // if there are no nodes, node value will be the new first and head of the list

        else {
            // create the link to the head(first node) in the list
            let current = this.head;

            while (current.next) {
                // scan all of the list until the end of it
                // the end of list is the Node with the link to the "next" == null
                current = current.next;
            }

            // reaching to end of list, the created node becomes the next node of the previous last node
            current.next = new Node(value);
        }
        // increment the length of the linked list by 1
        this.length++;
    }

    /**
     * @param {*} position - where we want to insert the Node
     * @param {*} value - the value of the added Node
     * @summary Big O complexity == n or 1
     */
    insertInPosition(position, value) {
        if (position < 0 || position > this.length)
            return 'The provided position value is invalid';

        let node = new Node(value);

        // insert node in 0 position == head of list
        if (position === 0) {
            node.next = this.head; // set the current head as the next element of the created one
            this.head = node; // insert the created node in the 0th position. new created node is now head of list
        } else {
            // inserting in a position that is not the head logic
            let current = this.head,
                prev = null,
                index = 0;

            while (index < position) {
                // loop the linked list until we get to the given position
                // move links to the previous and current nodes
                // the index simulate the position value we insert 
                prev = current; // insert the created node in previous node position
                current = current.next; // previous current node becomes the next node of the inserted node
                index++;
            }

            prev.next = node;
            node.next = current;
        }
        // increment the length of the linked list by 1
        this.length++;
    }

    /**
     * 
     * @param {*} position - where we want to insert the Node
     * @summary Big O complexity == n
     */
    getNodeByPosition(position) {
        if (position < 0 || position > this.length)
            return 'The provided position value is invalid';

        let current = this.head, // the head of the list
            index = 0; // the index for incrementing


        while (index < position) {
            // loop the linked list until we get to the given position
            current = current.next; // move the link next node of the current node
            index++; // increment index
        }
        return current.value;
    }

    /**
     * 
     * @param {*} position - where we want to insert the Node
     * @summary Big O complexity == n or 1
     * Remove node from specified position
     */
    removeFromPosition(position) {
        if (position < 0 || position > this.length)
            return 'The provided position value is invalid';

        let current = this.head; // current == head of list

        if (position === 0) {
            // to remove node from the first(head position) we just need to move the link of the head
            this.head = current.next;
        } else {
            let prev = null,
                index = 0;

            while (index < position) {
                // scan list until index is at the position
                prev = current;
                current = current.next;
                index++;
            }
            // after node position == position - 1 will be the node with position = position + 1, this means
            // that position is removed
            prev.next = current.next;
        }
        // decrement the length of the list
        this.length--;
        // return the removed value
        return current.value;
    }

    /**
     * @param {*} value - the value of the Node
     * @summary Big O complexity == n
     * Get the position of a value
     */
    getIndexOf(value) {
        let current = this.head,
            index = 0;

        while (current) {
            // go over each node in the list, of value is equal to the searched on - return index
            if (current.value === value) {
                return index;
            }
            // move the link of the current node to the next node
            current = current.next;
            index++
        }
        // if the value is not found return -1
        return -1;
    }

    /**
     * @param {*} value - the value of the Node
     * @summary Big O complexity == n
     * Remove the node from the list by the specified value
     */
    removeElmByValue(value) {
        // removeFromPosition == removes the node by specified position
        // getIndexOf ==  return the index by value
        return this.removeFromPosition(this.getIndexOf(value));
    }

    /**
     * @summary Big O complexity == 1
     * check whether our linked list is empty or not
     */
    isEmpty() {
        return this.length === 0;
    }

    /**
     * @summary Big O complexity == 1
     * @returns number of nodes in the linked list
     */
    getLength() {
        return this.length;
    }

    /**
     * @summary Big O complexity == n
     * @output log to console each value and its index
     */
    print() {
        let current = this.head,
            index = 0;

        while (current) {
            console.log(`The node in index ${index} value is ${current.value}`)
            current = current.next;
            index++;
        }
    }
}