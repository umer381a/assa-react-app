import { useQuery } from "@tanstack/react-query";
import { http, queryClient } from "../../lib/http";
import { DataCollection, Location } from "../../types";

export const useGetSingleLocationApi = ({
  locationId,
  page,
}: {
  locationId?: string;
  page: string;
}) => {
  return useQuery<Location, unknown, Location>({
    queryKey: ["location", locationId],
    queryFn: () => {
      return http.get(`/location/${locationId}`).then((res) => res.data);
    },
    initialData() {
      const cached = queryClient.getQueryData<DataCollection<Location>>([
        "locations",
        page,
      ]);
      const found = cached?.results?.find(
        (location) => locationId && location.id === +locationId
      );
      return found;
    },
    enabled: Boolean(locationId),
  });
};
