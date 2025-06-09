import { Hono } from "hono";
import { serveStatic } from "hono/deno";
import { server } from "./server/index.ts";

const app = new Hono();

// Mount backend API routes at /api
app.route("/api", server);

// Serve static files for everything else (frontend)
app.use("*", serveStatic({ root: "./dist" }));

// @ts-expect-error - Deno.serve used for deployment
Deno.serve(app.fetch);
