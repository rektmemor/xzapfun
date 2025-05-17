import { defineConfig } from "drizzle-kit";
import env from "./src/env";

export default defineConfig({
  schema: "./src/drizzle/schema.ts",
  dialect: "postgresql",
  dbCredentials: {
    url: env.DATABASE_URL,
  },
  verbose: true,
  strict: true,
});
