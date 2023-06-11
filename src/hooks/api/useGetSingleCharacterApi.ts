import { useQuery } from "@tanstack/react-query";
import { http, queryClient } from "../../lib/http";
import { Character } from "../../types";

export const useGetSingleCharacterApi = ({
  characterId,
  page,
}: {
  characterId?: string;
  page: string;
}) => {
  return useQuery<Character, unknown, Character>({
    queryKey: ["characters", characterId],
    queryFn: () => {
      return http.get(`/character/${characterId}`).then((res) => res.data);
    },
    initialData() {
      const cached = queryClient.getQueryData(["characters", page]);
      console.log("characters", cached);
      return undefined;
    },
  });
};
