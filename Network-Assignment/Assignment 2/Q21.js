class LinkedList {
    constructor() {
        this.head = null;
    }

    isEmpty() {
        return this.head === null;
    }
}

const list = new LinkedList();
console.log(list.isEmpty());
