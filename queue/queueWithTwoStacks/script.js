function Queue() {
    this.stack1 = new Stack();
    this.stack2 = new Stack(); // becomes a queue
}

Queue.prototype.enqueue = function (el) {
    this.stack1.storage[this.stack1.count] = el;
    this.stack1.count++;
};

Queue.prototype.dequeue = function() {
    if(this.stack1.isEmpty()) {
        throw new Error('There is no element in the stack 1 to add to stack2');
    }

    let theFirstElement = this.stack1.storage[0];

    while(!this.stack1.isEmpty()) {
        this.stack2.storage[this.stack2.count] = this.stack1.storage[this.stack1.count - 1];
        this.stack2.count++;
        delete this.stack1.storage[this.stack1.count - 1];
        this.stack1.count--;
    }

    return theFirstElement;
};

let queue = new Queue();
