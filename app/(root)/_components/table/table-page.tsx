"use client";
import { useBooks } from "@/hooks/useBooks";
import { columns } from "./columns";
import { DataTable } from "./data-table";

export default function TablePage() {
  const { data, error, isLoading } = useBooks();

  if (isLoading) {
    return <p className="text-sm animate-bounce mt-10">Loading...</p>;
  }

  if (error) {
    return (
      <p className="text-sm animate-bounce mt-10">
        Error loading books: {error.message}
      </p>
    );
  }
  if (data?.books === undefined) {
    return <p className="text-sm animate-bounce mt-10">Error loading books</p>;
  }

  return (
    <div className="container mx-auto py-10 bg-white mt-10">
      <DataTable columns={columns} data={data.books} />
    </div>
  );
}
