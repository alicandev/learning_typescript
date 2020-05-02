let array: number[] = [ 1, 2, 3 ];
let array2: Array<number> = [ 1, 2, 3 ];

class KeyValuePair<TKey, TValue> {
    constructor(
        public key: TKey, 
        public value: TValue
    ) {
    }
}

let pair1 = new KeyValuePair<number, string>(123, 'stringadsafds');
let pair2 = new KeyValuePair<number, Date>(12, new Date(Date.now()));
let pair3 = new KeyValuePair<number, string>(3, 'third');

class KeyValuePairPrinter<T, U> {
    constructor(private pairs: KeyValuePair<T, U>[]) {
    }
    print() {
        for (let p of this.pairs) {
            console.log(`${ p.key }: ${ p.value }`);
        }
    }
}

let printer = new KeyValuePairPrinter([ pair1, pair3 ])
