import { create } from "zustand";
import { mountStoreDevtool } from "simple-zustand-devtools";

export interface BooksState {
  id: number | null;
  delete: (id: number) => void;
}

export const booksStore = create<BooksState>((set) => ({
  id: null,
  delete: (state) => set(() => ({ id: state }))
}));

if (process.env.NODE_ENV === "development") {
  mountStoreDevtool("book-store", booksStore);
}
