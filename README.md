# AI Product Discovery System

## Where to Look

Backend system is located in:

/server

Key files:
- services/orchestrator.js (core workflow logic)
- services/logger.js (logging + cost tracking)
- routes/metrics.js (system observability)

---

## Live Capabilities

- AI-driven product filtering  
- Structured intent extraction  
- Cost & latency tracking  
- Metrics endpoint for observability  

---

## Overview

This is not a chatbot.

This system was built by layering AI orchestration on top of an existing production-style e-commerce frontend.

Instead of generating responses, the system converts natural language into structured, actionable workflows.

---

## What the System Does

- Accepts natural language queries (e.g. "sofa under 50000")  
- Converts them into structured intent (JSON)  
- Routes through an orchestration layer  
- Applies product filtering logic  
- Returns relevant results  
- Logs system behavior (tokens, latency, cost)  
- Exposes a metrics endpoint for observability  

---

## Core Idea

LLMs are treated as **decision layers**, not sources of truth.

All business logic remains deterministic and measurable.

---

## Architecture


User Query
↓
LLM Layer (mocked)
↓
Structured Intent (JSON)
↓
Orchestrator
↓
Product Filtering Engine
↓
Response + Logging
↓
Metrics API


---

## Example Flow

### Input


"luxury sofa under 50000"


### Interpreted Output

```json
{
  "intent": "product_search",
  "category": "sofa",
  "budget": 50000
}
System Behavior
Filters products based on category and budget
Returns top matching results
Logs request metrics
Sample Output
AI Endpoint
{
  "success": true,
  "interpretation": {
    "intent": "product_search",
    "category": "sofa",
    "budget": 50000
  },
  "results": [
    {
      "id": 1,
      "name": "Luxury Leather Sofa",
      "price": 48000
    }
  ],
  "metrics": {
    "tokens": 120,
    "latency": 300
  }
}
Metrics Endpoint
{
  "total_requests": 5,
  "avg_tokens": 120,
  "avg_latency": 280,
  "total_cost": 0.0012
}
Key Features
1. Multi-step Workflow
Query → AI → structured intent → execution → response
2. Orchestration Layer
Central control point for decision handling
Separates AI from business logic
3. Fallback Handling
Handles parsing failures
Handles empty result scenarios
Ensures system reliability
4. Observability

Each request logs:

tokens used (simulated)
latency
result count
estimated cost
5. Metrics Endpoint
GET /api/metrics

Returns:

total requests
average tokens
average latency
total cost
Design Decisions
LLM output is forced into structured JSON
System does not depend on LLM correctness
Logging is implemented at orchestration level
Cost is tracked per interaction (simulated)
LLM layer is abstracted and swappable
Current Limitations
LLM layer is mocked (no real API yet)
Logging is file-based (logs.json)
No caching or rate limiting
No persistent database
Why This Approach

Most AI integrations focus on generating responses.

This system focuses on:

control
reliability
measurability
cost awareness
How to Run
Backend
cd server
node app.js
Test Endpoints
AI Endpoint
POST /api/ai

Example:

{
  "query": "sofa under 50000"
}
Metrics Endpoint
GET /api/metrics
Future Improvements
Replace mock LLM with real model
Add caching layer for repeated queries
Introduce database-backed logging
Add retry and rate-limiting mechanisms
Improve ranking logic for results
Summary

This project demonstrates how to build AI systems that are:

structured
observable
cost-aware
reliable

Rather than relying on raw model output, the system wraps AI within controlled workflows.
