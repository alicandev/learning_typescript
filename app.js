function totalLength(x, y) {
    let xLength = x.length;
    let yLength = y.length;
    if (x instanceof Array) {
        x.push('abc');
    }
    if (x instanceof String) {
        x.substring(0, 5);
    }
    return xLength + yLength;
}
