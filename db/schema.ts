import { pgTable, serial, text, varchar, timestamp } from "drizzle-orm/pg-core";

export const books = pgTable("books", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  author: text("author").notNull(),
  published_date: timestamp("published_date").notNull(),
  genre: text("genre").notNull()
});
