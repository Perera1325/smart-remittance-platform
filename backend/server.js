const express = require("express");
const app = express();

// Import routes
const currencyRoutes = require("./routes/currencyRoutes");
const transactionRoutes = require("./routes/transactionRoutes");

const PORT = 3000;

// 🔥 VERY IMPORTANT (fixes your issue)
app.use(express.json());

// Routes
app.use("/api", currencyRoutes);
app.use("/api", transactionRoutes);

// Root route
app.get("/", (req, res) => {
    res.send("Smart Remittance API is running...");
});

// Health check
app.get("/health", (req, res) => {
    res.json({ status: "Server is running" });
});

// 404 handler
app.use((req, res) => {
    res.status(404).json({ error: "Route not found" });
});

// Global error handler
app.use((err, req, res, next) => {
    console.error("Server Error:", err.message);
    res.status(500).json({ error: "Internal server error" });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});