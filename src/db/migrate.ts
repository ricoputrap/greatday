
import { migrate } from 'drizzle-orm/postgres-js/migrator';
import db from '.';

const runMigration = async () => {
  await migrate(db, { migrationsFolder: 'src/db/migrations' });
}

runMigration();