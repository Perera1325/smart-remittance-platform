const { convertCurrency } = require("./currencyService");
const { createTransaction } = require("./transactionService");

function transferWithConversion(from, to, amount) {
    // Step 1: Convert
    const conversion = convertCurrency(from, to, amount);

    // Step 2: Store transaction
    const transaction = createTransaction(
        from,
        to,
        amount,
        conversion.convertedAmount
    );

    return {
        message: "Transfer completed successfully",
        conversion,
        transaction
    };
}

module.exports = { transferWithConversion };