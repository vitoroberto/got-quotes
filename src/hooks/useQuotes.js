import { useQuery } from "@tanstack/react-query";
import { getQuotes } from "../services/api";

export function useQuotes() {
  const { data, refetch, error, isError, isLoading } = useQuery({
    queryKey: ["quotes"],
    queryFn: getQuotes,
  });

  return { data, refetch, error, isError, isLoading };
}
