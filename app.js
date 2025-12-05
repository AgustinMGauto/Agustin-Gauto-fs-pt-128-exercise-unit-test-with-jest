let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

///1 EUR (Euro) = 1.07 USD (US Dollar)

const fromEuroToDollar = function(valueInEuro) {
    // Convertimos el valor a dólares
    let valueInDollar = valueInEuro * 1.07;
    // Retornamos el valor en dólares
    return valueInDollar;
}

//fromDollarToYen	monto en dólares	monto equivalente en yenes japoneses

function fromDollarToYen(usd){
        let dolarayen = usd * 146.26;
        return dolarayen
}

//fromYenToPound	monto en yenes	monto equivalente en libras esterlinas

function fromYenToPound (yen){
       let JPYaGBP =  yen * 0.00556
       return JPYaGBP
}

module.exports = {fromEuroToDollar,fromYenToPound,fromDollarToYen};