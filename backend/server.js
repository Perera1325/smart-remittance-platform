const express = require("express");
const app = express();

const currencyRoutes = require("./routes/currencyRoutes");

const PORT = 3000;

app.use(express.json());

// routes
app.use("/api", currencyRoutes);

app.get("/health", (req, res) => {
    res.json({ status: "Server is running" });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});