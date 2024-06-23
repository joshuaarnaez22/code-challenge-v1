export type Book = {
  title: string;
  author: string;
  published_date: date;
  genre: string;
};

export type UpdateBookProps = {
  title: string;
  author: string;
  published_date: date;
  genre: string;
  id: number;
};
