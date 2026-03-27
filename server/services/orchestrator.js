import { callLLM } from "./llm.js";
import { logInteraction } from "./logger.js";

export async function handleQuery(query, products) {
  try {
    const llm = await callLLM(query);

    let parsed;

    // 🔍 Try parsing LLM output
    try {
      parsed = JSON.parse(llm.content);
    } catch (err) {
      // 🔥 Fallback if parsing fails
      const fallbackResponse = {
        success: false,
        fallback: true,
        message: "LLM parsing failed, showing default recommendations",
        results: products.slice(0, 3),
        metrics: {
          tokens: llm.tokens,
          latency: llm.latency,
        },
      };

      // 🔥 LOGGING
      logInteraction({
        query,
        parsed: null,
        tokens: llm.tokens,
        latency: llm.latency,
        result_count: fallbackResponse.results.length,
      });

      return fallbackResponse;
    }

    let results = [];

    // 🔥 Product filtering logic
    if (parsed.intent === "product_search") {
      results = products.filter(
        (p) =>
          (!parsed.category || p.category.includes(parsed.category)) &&
          (!parsed.budget || p.price <= parsed.budget)
      );
    }

    // 🔥 Fallback if no results found
    if (results.length === 0) {
      const fallbackResponse = {
        success: true,
        fallback: true,
        message: "No exact match found, showing recommendations",
        interpretation: parsed,
        results: products.slice(0, 3),
        metrics: {
          tokens: llm.tokens,
          latency: llm.latency,
        },
      };

      // 🔥 LOGGING
      logInteraction({
        query,
        parsed,
        tokens: llm.tokens,
        latency: llm.latency,
        result_count: fallbackResponse.results.length,
      });

      return fallbackResponse;
    }

    // ✅ Normal success response
    const response = {
      success: true,
      interpretation: parsed,
      results: results.slice(0, 5),
      metrics: {
        tokens: llm.tokens,
        latency: llm.latency,
      },
    };

    // 🔥 LOGGING
    logInteraction({
      query,
      parsed,
      tokens: llm.tokens,
      latency: llm.latency,
      result_count: results.length,
    });

    return response;

  } catch (error) {
    // 🔥 System-level failure fallback
    const errorResponse = {
      success: false,
      error: "System failure",
      details: error.message,
    };

    // 🔥 LOGGING (even for failure)
    logInteraction({
      query,
      parsed: null,
      tokens: 0,
      latency: 0,
      result_count: 0,
    });

    return errorResponse;
  }
}