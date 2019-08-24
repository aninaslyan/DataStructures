function Node(element) {
    this.element = element;
    this.next = null;
}

function LinkedList() {
    this.head = null;
    this.size = 0;
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
    this.size++;
    return newNode;
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
    this.size++;
    return newNode;
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
            } else if (previousNode !== null && currentNode.next === null) {
                previousNode.next = null;
            } else {
                this.head = currentNode.next;
            }
            this.size--;
            return currentNode;
        } else {
            previousNode = currentNode;
            currentNode = currentNode.next;
        }
    }
    throw new Error(`${value} element was not found in the list`);
};

LinkedList.prototype.getSize = function () {
    return this.size;
};

LinkedList.prototype.eraseList = function () {
    this.head = null;
    this.size = 0;

    return this;
};

LinkedList.prototype.deleteList = function () {
    list = null;
    return this;
};

let list = new LinkedList();
