import { Hono } from "hono";
import { serveStatic } from "hono/deno";

const app = new Hono();

app.use("*", serveStatic({ root: "./dist" }));

// @ts-expect-error - Deno.serve is reserved for deployment
Deno.serve(app.fetch);
