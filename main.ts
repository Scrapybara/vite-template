import { Hono } from "hono";
import { serveStatic } from "hono/bun";

const app = new Hono();

app.use("*", serveStatic({ root: "./dist" }));

export default {
  port: 8000,
  fetch: app.fetch,
};
