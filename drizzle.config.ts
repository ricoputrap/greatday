import type { Config } from 'drizzle-kit';

const DB_NAME = process.env.DB_NAME || "";
const DB_HOST = process.env.DB_HOST || "";
const DB_USER = process.env.DB_USER || "";
const DB_PASSWORD = process.env.DB_PASSWORD || "";

export default {
  schema: './src/db/drizzle.schema.ts',
  out: './src/db/migrations',
  driver: 'pg', // 'pg' | 'mysql2' | 'better-sqlite' | 'libsql' | 'turso'
  dbCredentials: {
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASSWORD,
    database: DB_NAME,
  },
} satisfies Config;