import { Hono } from "hono";
import { cors } from "hono/cors";

// Create the API routes
const api = new Hono();

// Health check endpoint
api.get("/health", (c) => c.json({ status: "ok", timestamp: new Date().toISOString() }));

// Example data endpoint
api.get("/data", (c) => c.json({ 
  message: "Hello from the API",
  version: "1.0.0"
}));

// Create and export the server
export const server = new Hono();

// Enable CORS for all routes
server.use("/*", cors());

// Mount all API routes
server.route("/", api); 