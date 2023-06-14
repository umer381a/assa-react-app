import { useQuery } from "@tanstack/react-query";
import { http, queryClient } from "../../lib/http";
import { Character } from "../../types";

export const useGetSingleCharacterApi = ({
  characterId,
  locationPage,
}: {
  characterId?: string;
  locationPage: string;
}) => {
  return useQuery<Character, unknown, Character>({
    queryKey: ["characters","id" ,characterId],
    queryFn: () => {
      return http.get(`/character/${characterId}`).then((res) => res.data);
    },
    initialData() {
      if (!characterId) return undefined;

      const characters = queryClient.getQueryData<Character[]>([
        "characters",
        "locationPage",
        locationPage,
      ]);

      return characters?.find((character) => character.id === +characterId);
    },
  });
};
