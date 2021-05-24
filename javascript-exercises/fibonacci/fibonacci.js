const fibonacci = function(x) {
    sanitized = parseInt(x);
    let fib = 1;

    if (sanitized < 0) {
        return "OOPS";
    } else {
        for (i=1; i<x; i++) {
            fib = fib + i;
        }
        return fib;
    }
}

module.exports = fibonacci
