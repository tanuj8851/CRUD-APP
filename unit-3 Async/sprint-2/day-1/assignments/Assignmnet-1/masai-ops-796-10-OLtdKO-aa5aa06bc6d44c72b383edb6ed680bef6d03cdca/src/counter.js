class Counter {
    constructor() {
        this.value = 0;
    }

    getValue() {
        return this.value;
    }

    addValue(x) {
        this.value += x;
    }

    reduceValue(x) {
        this.value -= x;
    }

    resetValue() {
        this.value = 0;
    }
}


// Do not change this
export default Counter;