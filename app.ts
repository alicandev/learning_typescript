function countdown({
    initial: current, 
    final: final = 0, 
    interval : interval = 1, 
}) {
    while (current > final) {
        console.log(current);
        current -= interval;
    }
}