export async function callLLM(userQuery) {
  const start = Date.now();

  // simulate latency (real systems always have delay)
  await new Promise(res => setTimeout(res, 200 + Math.random() * 300));

  const query = userQuery.toLowerCase();

  let parsed;

  if (query.includes("sofa")) {
    parsed = {
      intent: "product_search",
      category: "sofa",
      budget: extractBudget(query),
      filters: []
    };
  } 
  else if (query.includes("chair")) {
    parsed = {
      intent: "product_search",
      category: "chair",
      budget: extractBudget(query),
      filters: []
    };
  }
  else {
    parsed = {
      intent: "unclear",
      category: "",
      budget: null,
      filters: []
    };
  }

  const latency = Date.now() - start;

  return {
    content: JSON.stringify(parsed),
    tokens: 100 + Math.floor(Math.random() * 50), // simulated tokens
    latency
  };
}


// helper function (makes it feel real)
function extractBudget(query) {
  const match = query.match(/\d+/);
  return match ? parseInt(match[0]) : null;
}