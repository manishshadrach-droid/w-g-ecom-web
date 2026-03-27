import express from "express";
import fs from "fs";

const router = express.Router();

router.get("/", (req, res) => {
  try {
    const data = fs.readFileSync("logs.json", "utf-8")
      .trim()
      .split("\n")
      .map(line => JSON.parse(line));

    const total = data.length;

    const avgTokens = total
      ? data.reduce((sum, d) => sum + d.tokens, 0) / total
      : 0;

    const avgLatency = total
      ? data.reduce((sum, d) => sum + d.latency, 0) / total
      : 0;

    const totalCost = data.reduce((sum, d) => sum + d.cost, 0);

    res.json({
      total_requests: total,
      avg_tokens: avgTokens,
      avg_latency: avgLatency,
      total_cost: totalCost
    });

  } catch {
    res.json({
      message: "No data yet"
    });
  }
});

export default router;