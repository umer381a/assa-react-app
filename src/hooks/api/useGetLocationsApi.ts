import { useQuery } from "@tanstack/react-query";
import { http } from "../../lib/http";
import { DataCollection, Location } from "../../types";

type ApiSuccess = DataCollection<Location>;

export const useGetLocationsApi = (page = 1) => {
  return useQuery<ApiSuccess, unknown, ApiSuccess>({
    queryKey: ["locations", `${page}`],
    queryFn: () => {
      return http.get(`/location?page=${page}`).then((res) => res.data);
    },
  });
};
