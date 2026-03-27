import express from "express";
import { handleQuery } from "../services/orchestrator.js";
import products from "../data/products.js";

const router = express.Router();

router.post("/", async (req, res) => {
  const { query } = req.body;

  // basic validation
  if (!query || typeof query !== "string") {
    return res.status(400).json({
      success: false,
      error: "Invalid query input",
    });
  }

  try {
    const result = await handleQuery(query, products);
    return res.json(result);

  } catch (error) {
    return res.status(500).json({
      success: false,
      error: "Internal server error",
      details: error.message,
    });
  }
});

export default router;