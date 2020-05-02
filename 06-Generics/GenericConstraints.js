function totalLength(x, y) {
    let total = x.length + y.length;
    return total;
}
class CustomArray extends Array {
}
let l = totalLength('Jess', 'Chadwick');
let l2 = totalLength([1, 2, 3], new CustomArray());
