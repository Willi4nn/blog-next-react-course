import { InferInsertModel, InferSelectModel } from 'drizzle-orm';
import { integer, sqliteTable, text } from 'drizzle-orm/sqlite-core';

export const postsTable = sqliteTable('posts', {
  id: text('id').primaryKey(),
  slug: text('slug').notNull().unique(),
  title: text('title').notNull(),
  author: text('author').notNull(),
  content: text('content').notNull(),
  excerpt: text('excerpt').notNull(),
  createdAt: text('created_at').notNull(),
  published: integer('published', { mode: 'boolean' }).notNull(),
  updatedAt: text('updated_at').notNull(),
  coverImageUrl: text('cover_image_url').notNull(),
});

export type PostsTableSelectMode = InferSelectModel<typeof postsTable>;
export type PostsTableInsertMode = InferInsertModel<typeof postsTable>;
