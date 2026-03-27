import fs from "fs";

const LOG_FILE = "logs.json";

function estimateCost(tokens) {
  return tokens * 0.000002;
}

export function logInteraction(data) {
  const logEntry = {
    ...data,
    cost: estimateCost(data.tokens || 0),
    timestamp: new Date().toISOString(),
  };

  fs.appendFileSync(LOG_FILE, JSON.stringify(logEntry) + "\n");
}