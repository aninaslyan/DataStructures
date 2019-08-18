function Stack() {
    this.storage = {};
    this.count = 0;
}

Stack.prototype.empty = function() {
    if(this.count === 0) {
        throw new Error('There is no element in the stack');
    }
};

Stack.prototype.push = function(el) {
    this.storage[this.count] = el;
    this.count++;
};

Stack.prototype.pop = function() {
    Stack.prototype.empty();

    let theLastElement = this.storage[this.count - 1];
    delete this.storage[this.count - 1];
    this.count--;
    return theLastElement;
};

Stack.prototype.peek = function() {
    Stack.prototype.empty();

    return this.storage[this.count - 1];
};

Stack.prototype.size = function() {
    return this.count;
};

let stack = new Stack();
