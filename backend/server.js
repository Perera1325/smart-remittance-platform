const express = require("express");

const app = express();
const PORT = 3000;

app.use(express.json());

// Health check route
app.get("/health", (req, res) => {
    res.json({ status: "Server is running" });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});