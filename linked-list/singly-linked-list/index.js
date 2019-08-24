function Node(element) {
    this.element = element;
    this.next = null;
}

function LinkedList() {
    this.head = null;
}

LinkedList.prototype.insertAtEnd = function (value) {
    let newNode = new Node(value);

    if (this.head === null) {
        this.head = newNode;
    } else {
        let currentNode = this.head;

        while (currentNode.next !== null) {
            currentNode = currentNode.next;
        }
        currentNode.next = newNode;
    }
};

LinkedList.prototype.insertAtBeginning = function (value) {
    let newNode = new Node(value);

    if (this.head === null) {
        this.head = newNode;
    } else {
        let currentNode = this.head;

        this.head = newNode;
        this.head.next = currentNode;
    }
};

LinkedList.prototype.removeElement = function (value) {
    let currentNode = this.head;
    let previousNode = null;

    if (currentNode === null) {
        throw new Error('There is no element to remove');
    }

    while (currentNode.next !== null || currentNode.element === value) {
        if (currentNode.element === value) {
            if (previousNode !== null && currentNode.next !== null) {
                previousNode.next = currentNode.next;
                return currentNode;
            } else if (previousNode !== null && currentNode.next === null) {
                previousNode.next = null;
                return currentNode;
            } else {
                this.head = currentNode.next;
                return currentNode;
            }
        } else {
            previousNode = currentNode;
            currentNode = currentNode.next;
        }
    }
    throw new Error(`${value} element was not found in the list`);
};

let list = new LinkedList();
