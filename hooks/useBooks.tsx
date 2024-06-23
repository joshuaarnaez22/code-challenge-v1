import { useQuery } from "@tanstack/react-query";
import { db } from "@/db";
import { fetchbooks } from "@/actions/books-action";

export const useBooks = () => {
  return useQuery({
    queryKey: ["books"],
    queryFn: async () => fetchbooks()
  });
};
