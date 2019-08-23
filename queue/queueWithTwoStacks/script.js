function Queue() {
    this.input = new Stack();
    this.output = new Stack();
    this.count = 0;
}

Queue.prototype.enqueue = function (el) {
    this.input.push(el);
    this.count++;
};

Queue.prototype.dequeue = function () {
    if (this.input.isEmpty()) {
        throw new Error('There is no element in input to add to output');
    }

    while (!this.input.isEmpty()) {
        this.output.push(this.input.pop());
    }

    let thePoppedElement = this.output.pop();
    while (!this.output.isEmpty()) {
        this.input.push(this.output.pop());
    }

    this.count--;

    return thePoppedElement;
};

let queue = new Queue();
