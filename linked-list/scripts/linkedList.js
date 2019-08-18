class Node {
    constructor(element, next = null, previous = null) {
        this.element = element;
        this.next = next;
        this.previous = previous;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
        this.sizeInBytes = 0
    }

    insertAtEnd(data) {
        const newNode = new Node(data);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.previous = this.tail;
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.size++;
        this.sizeInBytes += this.getSizeWithBytes(data);
    }

    insertBeginning(data) {
        const newNode = new Node(data);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.head.previous = newNode;
            newNode.next = this.head;
            this.head = newNode;
        }
        this.size++;
        this.sizeInBytes += this.getSizeWithBytes(data);
    }

    insertAt(index = null, ...elements) {
        const dataArray = [...elements];

        for (let data of dataArray) {
            const newNode = new Node(data);

            if (index === null || index >= this.size) this.insertAtEnd(data);

            else if (index === 0) this.insertBeginning(data);

            else if (typeof index === "number") {
                let current = this.head;
                let counter = 1;

                while (current) {
                    current = current.next;
                    if (counter === index) {
                        newNode.previous = current.previous;
                        current.previous.next = newNode;
                        newNode.next = current;
                        current.previous = newNode;
                    }
                    counter++
                }
                this.size++;
                this.sizeInBytes += this.getSizeWithBytes(data);
            }
        }
    }

    removeElement(data) {
        let current = this.head;

        while (current) {
            if (current.element === data) {
                if (current === this.head && current === this.tail) {
                    this.head = null;
                    this.tail = null;
                } else if (current === this.head) {
                    this.head = this.head.next;
                    this.head.previous = null;
                } else if (current === this.tail) {
                    this.tail = this.tail.previous;
                    this.tail.next = null;
                } else {
                    current.previous.next = current.next;
                    current.next.previous = current.previous;
                }
                this.size--;
                this.sizeInBytes -= this.getSizeWithBytes(data);
            }
            current = current.next
        }
    }

    getSize() {
        return this.sizeInBytes;
    }

    getQuantity() {
        return this.size;
    }

    getSizeWithBytes(element) {
        let bytes = 0;

        if (typeof element === 'boolean') {
            bytes += 4;
        } else if (typeof element === 'string') {
            for (let i = 0; i < element.length; i++) {
                const partCount = encodeURI(element[i]).split("%").length;
                bytes += partCount === 1 ? 1 : partCount - 1;
            }
        } else if (typeof element === 'number') {
            bytes += 8;
        } else if (typeof element === 'object') {
            for (let i in element) {
                bytes += 8;
            }
        }
        return bytes;
    }

    eraseList() {
        this.head = null;
        this.tail = null;
        this.size = 0;
        return this.constructor;
    }

    getList() {
        if (this.head === null) return null;
        let linked = this.head;
        while (linked !== null) {
            console.log(linked.element);
            if (linked.next) console.log("<-->");
            linked = linked.next;
        }
        return this;
    }

    deleteList() {
        list = null;
        return list;
    }

    sortList() {
        let result = null;
        let item = this.head;

        while (item) {
            if (!result) {
                result = new Node(item.element);
            }
            else {
                let isInserted = false;
                let item2 = result;
                while (item2) {
                    if (item.element < item2.element) {
                        let tmp = new Node(item2.element, item2.next, item.element);

                        item2.element = item.element;
                        item2.next = tmp;

                        isInserted = true;
                        break;
                    }
                    else if (!item2.next) {
                        item2.next = new Node(item.element);
                        break;
                    }
                    item2 = item2.next;
                }
            }
            item = item.next;
        }

        this.head = result;
    }
}

function createList() {
    return new LinkedList();
}

let list = createList();

// list.insertAt(10, "Ani", "kk", 8, 9, 2.5, ["1", 6, { a: 3 }], 21, 0, 2, 1);
// list.removeElement(9);
// list.getList();
// console.log(list.getSize(), "size");
// console.log("-------------------------");
// list.sortList(list.head);
// list.getList();