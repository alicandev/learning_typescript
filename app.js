// use spread operator to use an arbitrary amount of values as parameter
function addArrow(action, ...values) {
    let total = 0;
    values.map(v => {
        switch (action) {
            case 'add':
                total += v;
                break;
            case 'substract':
                total -= v;
                break;
        }
    });
    return total;
}
addArrow("add", 3, 4, 5, 6);
let source = [3, 4, 5];
let target = [1, 2, ...source, 6, 7];
