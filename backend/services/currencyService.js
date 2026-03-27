const rates = require("../data/exchangeRates.json");

function convertCurrency(from, to, amount) {
    if (!rates[from] || !rates[to]) {
        throw new Error("Invalid currency code");
    }

    const amountInLKR = amount * rates[from];
    const convertedAmount = amountInLKR / rates[to];

    return {
        from,
        to,
        originalAmount: amount,
        convertedAmount: convertedAmount.toFixed(2)
    };
}

module.exports = { convertCurrency };