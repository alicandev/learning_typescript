function countdown(options) {
    var options = options === undefined ? {} : options,
        initial = options.initial === undefined ? 10 : options.initial,
        final = options.final === undefined ? 0 : options.final,
        interval = options.interval === undefined ? 1 : options.interval;
        
    var current = initial;
    
    while (current > final) {
        console.log(current);
        current -= interval;
    }
}