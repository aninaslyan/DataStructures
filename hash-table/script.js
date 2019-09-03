function HashTable() {
    this.storage = {};
    this.max = 17;
}

HashTable.prototype.hash = function (value, max) {
    let hash = 0;
    for (let i = 0; i < value.length; i++) {
        hash += value.charCodeAt(value[i]);
    }
    return hash % max;
};

HashTable.prototype.add = function (key, value) {
    let index = this.hash(value, this.max);

    if (!this.storage[index]) {
        this.storage[index] = {[key]: value};
    } else if (Object.values(this.storage[index]).join('') === [value].join('')) {
        return "can't add duplicate value";
    } else {
        this.storage[index][key] = value;
    }

    return {key: value};
};

HashTable.prototype.get = function (value) {
    let index = this.hash(value, this.max);
    debugger;
    if (this.storage[index]) {
        return Object.keys(this.storage[index]).find(key => this.storage[index][key] === value);
    }
    return "value doesn't exist in hash table";
};

HashTable.prototype.remove = function (value) {
    let index = this.hash(value, this.max);
    let toBeRemoved;

    for (let i = 0; i < this.storage[index].length; i++) {
        if (this.storage[index][i][1] === value) {
            toBeRemoved = this.storage[index][i];
            this.storage[index].splice(i, 1);
        }
    }
    return toBeRemoved;
};

let hashTable = new HashTable();
