function HashTable() {
    this.storage = [];
    this.max = 17;
}

HashTable.prototype.hash = function (value, max) {
    let hash = 0;
    for (let i = 0; i < value.length; i++) {
        hash += value.charCodeAt(value[i]);
    }
    return hash % max;
};

HashTable.prototype.add = function (value, key) {
    let index = this.hash(value, this.max);
    let arr = [key, value];

    if (!this.storage[index]) {
        this.storage[index] = [arr];
    } else {
        this.storage[index].push(arr)
    }
};

HashTable.prototype.get = function (value) {
    let index = this.hash(value, this.max);
    for (let i = 0; i < this.storage[index].length; i++) {
        if (this.storage[index][i][1] === value) {
            return this.storage[index][i][0];
        }
    }
};

HashTable.prototype.remove = function (value) {
    let index = this.hash(value, this.max);
    for (let i = 0; i < this.storage[index].length; i++) {
        if (this.storage[index][i][1] === value) {
            var toBeRemoved = this.storage[index][i];
            this.storage[index].splice(i, 1);
        }
    }
    return toBeRemoved;
};

let hashTable = new HashTable();
