const express = require("express");
const router = express.Router();

const { transferWithConversion } = require("../services/integrationService");

router.post("/transfer-with-conversion", (req, res) => {
    try {
        const { from, to, amount } = req.body || {};

        if (!from || !to || amount === undefined) {
            return res.status(400).json({
                error: "Missing required fields"
            });
        }

        const result = transferWithConversion(from, to, Number(amount));

        res.json(result);

    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;