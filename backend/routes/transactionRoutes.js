const express = require("express");
const router = express.Router();

const { createTransaction, getTransactions } = require("../services/transactionService");
const { convertCurrency } = require("../services/currencyService");

// POST: Send money
router.post("/send-money", (req, res) => {
    try {
        // 🔥 Safe destructuring (prevents crash)
        const { from, to, amount } = req.body || {};

        // Validation
        if (!from || !to || amount === undefined) {
            return res.status(400).json({
                error: "Missing required fields (from, to, amount)"
            });
        }

        if (isNaN(amount) || Number(amount) <= 0) {
            return res.status(400).json({
                error: "Amount must be a valid number greater than 0"
            });
        }

        console.log(`Processing transaction: ${amount} ${from} → ${to}`);

        // Convert currency
        const conversion = convertCurrency(from, to, Number(amount));

        // Save transaction
        const transaction = createTransaction(
            from,
            to,
            Number(amount),
            conversion.convertedAmount
        );

        console.log(`Transaction created: ${transaction.id}`);

        res.json({
            message: "Transaction successful",
            transaction
        });

    } catch (err) {
        console.error("Transaction Error:", err.message);
        res.status(500).json({ error: err.message });
    }
});

// GET: Fetch all transactions
router.get("/transactions", (req, res) => {
    try {
        const transactions = getTransactions();
        res.json(transactions);
    } catch (err) {
        console.error("Fetch Error:", err.message);
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;