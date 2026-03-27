import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import aiRoutes from "./routes/ai.js";
import metricsRoutes from "./routes/metrics.js";

dotenv.config();

const app = express(); // ✅ FIRST initialize app

app.use(cors());
app.use(express.json());

// ✅ THEN use routes
app.use("/api/ai", aiRoutes);
app.use("/api/metrics", metricsRoutes);

// optional test route
app.get("/", (req, res) => {
  res.send("Server is running");
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});