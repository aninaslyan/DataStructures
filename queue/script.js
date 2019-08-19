function Queue() {
    this.storage = {};
    this.count = 0;
}

Queue.prototype.isEmpty = function () {
    return this.count === 0;
};

Queue.prototype.enqueue = function (el) {
    if(!el) {
        throw new Error('There is no element to add');
    }

    this.storage[this.count] = el;
    this.count++;
};

Queue.prototype.dequeue = function() {
    if(this.isEmpty()) {
        throw new Error('There is no element in the queue');
    }

    let theFirstElement = this.storage[0];
    delete this.storage[0];
    this.count--;
    return theFirstElement;
};

Queue.prototype.front = function() {
    if(this.isEmpty()) {
        throw new Error('There is no element in the queue');
    }

    return this.storage[0];
};

Queue.prototype.size = function () {
    return this.count;
};

let queue = new Queue();
