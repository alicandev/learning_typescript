interface IHaveALength {
    length: number;
}

function totalLength<T extends IHaveALength>(x: T, y: T) {
    let total: number = x.length + y.length;
    return total;
}

class CustomArray<T> extends Array<T> {}

let l = totalLength('Jess', 'Chadwick');
let l2 = totalLength([ 1, 2, 3 ], new CustomArray<number>());