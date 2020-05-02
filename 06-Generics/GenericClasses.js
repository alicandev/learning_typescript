let array = [1, 2, 3];
let array2 = [1, 2, 3];
class KeyValuePair {
    constructor(key, value) {
        this.key = key;
        this.value = value;
    }
}
let pair1 = new KeyValuePair(123, 'stringadsafds');
let pair2 = new KeyValuePair(12, new Date(Date.now()));
let pair3 = new KeyValuePair(3, 'third');
class KeyValuePairPrinter {
    constructor(pairs) {
        this.pairs = pairs;
    }
    print() {
        for (let p of this.pairs) {
            console.log(`${p.key}: ${p.value}`);
        }
    }
}
let printer = new KeyValuePairPrinter([pair1, pair3]);
