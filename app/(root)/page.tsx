import { BooksTabs } from "./_components/books-tabs";

export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <BooksTabs />
    </main>
  );
}
