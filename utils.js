/**
 * @param {*} value - the value of the added Node
 */
function addToTheEndOfList(value) {
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
 */
function insertInPosition(position, value) {
    if (position < 0 || position > this.length)
        return 'Position value is invalid';

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

function getNodeByPosition(position) {
    //TBD
}

module.exports = {
    addToTheEndOfList,
    insertInPosition,
    getNodeByPosition
}