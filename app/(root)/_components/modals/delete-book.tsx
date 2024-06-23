"use client";
import React, { useTransition } from "react";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger
} from "@/components/ui/alert-dialog";
import { useBooks } from "@/hooks/useBooks";
import { booksStore } from "@/store/books";
import { Trash } from "lucide-react";
import { deletebook } from "@/actions/books-action";

export const DeleteBookModal = ({
  open,
  onClose
}: {
  open: boolean;
  onClose: () => void;
}) => {
  const [_, startTransition] = useTransition();

  const { refetch } = useBooks();
  const { id } = booksStore();

  const deleteBook = () => {
    startTransition(async () => {
      if (!id) return;
      try {
        await deletebook(id);
        refetch();
      } catch (error) {
        console.log("Something went wrong");
      } finally {
        onClose();
      }
    });
  };
  return (
    <AlertDialog open={open} onOpenChange={onClose}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your book
            and remove your data from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={deleteBook}>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
