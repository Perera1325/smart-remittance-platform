const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "../data/transactions.json");

// Read transactions
function getTransactions() {
    const data = fs.readFileSync(filePath);
    return JSON.parse(data);
}

// Save transactions
function saveTransactions(transactions) {
    fs.writeFileSync(filePath, JSON.stringify(transactions, null, 2));
}

// Create transaction
function createTransaction(from, to, amount, convertedAmount) {
    const transactions = getTransactions();

    const newTransaction = {
        id: Date.now(),
        from,
        to,
        amount,
        convertedAmount,
        date: new Date().toISOString()
    };

    transactions.push(newTransaction);
    saveTransactions(transactions);

    return newTransaction;
}

module.exports = {
    getTransactions,
    createTransaction
};