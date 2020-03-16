let LinkedList = require('./linked-list');

function main() {
    console.log(`LinkedList demo`)

    let list = new LinkedList();
    console.log('Before');
    list.print();

    console.log('--------addToTheEndOfList()--------')
    console.log('Add 5'); list.addToTheEndOfList(5);
    console.log('Add 10'); list.addToTheEndOfList(10);
    console.log('Add 15'); list.addToTheEndOfList(15);
    console.log('After');
    list.print();

    console.log('--------removeFromPosition()--------')

    console.log('Remove from position 0', list.removeFromPosition(0))
    console.log('Remove from position 1', list.removeFromPosition(1))
    console.log('Remove from position 10', list.removeFromPosition(10))
    list.print();

    console.log('---------insertInPosition()-------')

    console.log('Insert 50 to position 0'); list.insertInPosition(0, 50)
    console.log('Insert 100 to position 0'); list.insertInPosition(0, 100)
    console.log('Insert 1 to position 4', list.insertInPosition(4, 1));
    list.print()

    console.log('-------removeElmByValue()---------')
    console.log("Removed by Value", list.removeElmByValue(100));
    list.print()

    console.log('--------getNodeByPosition()--------')
    console.log('Get by Position', list.getNodeByPosition(1));
    console.log('The list Length', list.getLength());
    console.log('List is Empty?', list.isEmpty());
}

main();
