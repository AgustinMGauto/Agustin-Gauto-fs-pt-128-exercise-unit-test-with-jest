test("One euro should be 1.07 dollars", function() {
    // Importo la funcion desde app.js
    const { fromEuroToDollar } = require('./app.js');

    // Uso la función como debe ser usada
    const dollars = fromEuroToDollar(3.5);

    // Si 1 euro son 1.07 dólares, entonces 3.5 euros debe ser (3.5 * 1.07)
    const expected = 3.5 * 1.07;

    // Hago mi comparación (la prueba)
    expect(fromEuroToDollar(3.5)).toBeCloseTo(3.745); // 1 euro son 1.07 dólares, entonces 3.5 euros deberían ser = (3.5 * 1.07)
})

test("un dolar deberia ser 146.26 yenes", function() {
    const { fromDollarToYen } = require('./app.js');

    const dolayen = fromDollarToYen(5);
    const expected = 5 * 146.261682;

    expect(dolayen).toBeCloseTo(expected); 
})

test("un yen deberia ser 0.00556 libras esterlinas", function() {
    const { fromYenToPound } = require('./app.js');

    const yenalibras = fromYenToPound(15);
    const expected = 15 * 0.00556;

    expect(yenalibras).toBeCloseTo(expected); 
})