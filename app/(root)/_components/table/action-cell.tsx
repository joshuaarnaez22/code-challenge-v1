"use client";
import React, { useState } from "react";
import { UpdateBookProps } from "@/types";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { MoreHorizontal, Pencil, Trash2 } from "lucide-react";
import { DeleteBookModal } from "../modals/delete-book";
import { UpdateBookModal } from "../modals/update-book";
import { booksStore } from "@/store/books";
export default function ActionCell({ book }: { book: UpdateBookProps }) {
  const { delete: deleteBook } = booksStore();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAlertOpen, setAlertOpen] = useState(false);
  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleAlertOpen = () => {
    deleteBook(book.id);
    setAlertOpen(true);
  };

  const handleAlertClose = () => {
    setAlertOpen(false);
  };

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="h-8 w-8 p-0">
            <span className="sr-only">Open menu</span>
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-[150px] space-y-1">
          <DropdownMenuLabel>Actions</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem onSelect={handleModalOpen}>
            <Pencil className="h-4 w-4 mr-2" />
            Update
          </DropdownMenuItem>
          <DropdownMenuItem onSelect={handleAlertOpen}>
            <Trash2 className="h-4 w-4 mr-2 text-red-500" />
            Delete
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <DeleteBookModal open={isAlertOpen} onClose={handleAlertClose} />
      <UpdateBookModal
        book={book}
        open={isModalOpen}
        onClose={handleModalClose}
      />
    </>
  );
}
