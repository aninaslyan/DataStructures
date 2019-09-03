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

    return {[key]: value};
};

HashTable.prototype.get = function (value) {
    let index = this.hash(value, this.max);

    if (this.storage[index]) {
        return Object.keys(this.storage[index]).find(key => this.storage[index][key] === value);
    }
    return "value doesn't exist in hash table";
};

HashTable.prototype.remove = function (value) {
    let index = this.hash(value, this.max);
    let indexToRemove;

    if (this.storage[index]) {
        indexToRemove = Object.keys(this.storage[index]).find(key => this.storage[index][key] === value);
        delete hashTable.storage[index][indexToRemove];
        return indexToRemove;
    } else {
        return "value doesn't exist in hash table";
    }
};

let hashTable = new HashTable();
