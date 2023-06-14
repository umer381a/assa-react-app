import { useQuery } from "@tanstack/react-query";
import { http } from "../../lib/http";
import { Character } from "../../types";

type ApiSuccess = Character | Character[];

export const useGetCharactersApi = ({
  locationPage,
  residents = [],
}: {
  residents?: string[];
  locationPage: string;
}) => {
  const characterIds = residents
    .map((resident) => resident.split("/").pop())
    .filter(Boolean)
    .join(",");
  return useQuery<ApiSuccess, unknown, ApiSuccess>({
    queryKey: ["characters", "locationPage", locationPage],
    queryFn: () => {
      return http.get(`/character/${characterIds}`).then((res) => res.data);
    },
    enabled: characterIds.length !== 0,
  });
};
