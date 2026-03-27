const express = require("express");
const router = express.Router();

const { convertCurrency } = require("../services/currencyService");
const { validateConversionQuery } = require("../utils/validate");

router.get("/convert", (req, res) => {
    const error = validateConversionQuery(req.query);
    if (error) {
        return res.status(400).json({ error });
    }

    try {
        const { from, to, amount } = req.query;

        const result = convertCurrency(from, to, Number(amount));
        res.json(result);

    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;