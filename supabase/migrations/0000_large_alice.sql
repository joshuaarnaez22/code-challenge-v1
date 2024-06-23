CREATE TABLE IF NOT EXISTS "books" (
	"id" serial PRIMARY KEY NOT NULL,
	"title" text,
	"author" text,
	"publishedDate" timestamp,
	"genre" text
);
