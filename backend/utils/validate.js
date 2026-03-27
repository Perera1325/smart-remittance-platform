function validateConversionQuery(query) {
    const { from, to, amount } = query;

    if (!from || !to || !amount) {
        return "Missing required query parameters";
    }

    if (isNaN(amount)) {
        return "Amount must be a number";
    }

    return null;
}

module.exports = { validateConversionQuery };