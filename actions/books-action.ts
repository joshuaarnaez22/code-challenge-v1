"use server";
import { db } from "@/db";
import { books } from "@/db/schema";
import { Book } from "@/types";
import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";

export const fetchbooks = async () => {
  try {
    const data = await db.query.books.findMany({});
    if (data) return { books: data };
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export const deletebook = async (id: number) => {
  if (!id) throw new Error("Id is missing");
  try {
    await db.delete(books).where(eq(books.id, id));
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export const createbook = async ({
  title,
  author,
  published_date,
  genre
}: Book) => {
  try {
    await db.insert(books).values({ title, author, published_date, genre });
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export const updatebook = async ({
  title,
  author,
  published_date,
  genre,
  id
}: Book & { id: number }) => {
  try {
    await db
      .update(books)
      .set({ title, author, published_date, genre })
      .where(eq(books.id, id));
  } catch (error: any) {
    throw new Error(error.message);
  }
};
