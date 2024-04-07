import {
  pgTable,
  serial,
  text,
  varchar,
  integer,
  index
} from 'drizzle-orm/pg-core'

export const user = pgTable('user', {
  id: serial('id').primaryKey(),
  fullname: varchar('fullname', { length: 255 }).notNull(),
  username: varchar('username', { length: 255 }).notNull().unique(),
  email: varchar('email', { length: 255 }).unique().notNull().unique(),
  password: varchar('password', { length: 255 }).notNull(),
  profile_pic: varchar('profile_pic', { length: 255 }),
  created_at: integer('created_at')
    .notNull()
    .$defaultFn(() => Math.floor(Date.now() / 1000)),
}, (table) => ({
  usernameIndex: index('username_idx').on(table.username)
}));

export const post = pgTable('post', {
  id: serial('id').primaryKey(),
  content: text('content').notNull(),
  created_at: integer('created_at')
    .notNull()
    .$defaultFn(() => Math.floor(Date.now() / 1000)),
  user_id: integer('user_id')
    .notNull()
    .references(() => user.id)
}, (table) => ({
  userIdIndex: index('user_id_idx').on(table.user_id)
}));