function Node(element) {
    this.element = element;
    this.next = null;
}

function LinkedList() {
    this.head = null;
}

LinkedList.prototype.insertAtBeginning = function (value) {
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

LinkedList.prototype.insertAtEnd = function (value) {
    let newNode = new Node(value);

    if(this.head === null) {
        this.head = newNode;
    } else {
        let currentNode = this.head;

        this.head = newNode;
        this.head.next = currentNode;
    }
};

let list = new LinkedList();
