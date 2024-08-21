function getFibonacciSeries(limit) {
    let a = 0, b = 1;
    let series = [];

    while (a < limit) {
        series.push(a);
        [a, b] = [b, a + b];
    }

    return series;
}

const limit = parseInt(80, 10) // User input

console.log(getFibonacciSeries(limit));
