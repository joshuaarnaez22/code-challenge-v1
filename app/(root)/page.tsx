import Image from "next/image";
import { BooksTabs } from "./_components/books-tabs";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <BooksTabs />
    </main>
  );
}
