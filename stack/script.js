function Stack() {
    this.storage = {};
    this.count = 0;
}

Stack.prototype.isEmpty = function () {
    return this.count === 0;
};

Stack.prototype.push = function (el) {
    if (!el) {
        throw new Error('There is no element to add');
    }

    this.storage[this.count] = el;
    this.count++;
};

Stack.prototype.pop = function () {
    if (this.isEmpty()) {
        throw new Error('There is no element in the stack');
    }

    let theLastElement = this.storage[this.count - 1];
    delete this.storage[this.count - 1];
    this.count--;
    return theLastElement;
};

Stack.prototype.peek = function () {
    if (this.isEmpty()) {
        throw new Error('There is no element in the stack');
    }

    return this.storage[this.count - 1];
};

Stack.prototype.size = function () {
    return this.count;
};

let stack = new Stack();
