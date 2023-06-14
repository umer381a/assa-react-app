import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Layout, LocationList, Pagination } from "../components";
import { useGetLocationsApi } from "../hooks/api/useGetLocationsApi";
import { searchParamsToObject } from "../lib/helpers";
import { LocationListSketeton } from "../components/LocationListSkeleton";

export default function Root() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [page, setPage] = useState(() => {
    return Number(searchParams.get("page") ?? 1);
  });

  const { isLoading, data: locations } = useGetLocationsApi(page);

  const { results, info } = locations || {};

  const handlePageChange = (nextPage: number) => {
    setPage(nextPage);
    const currentParams = searchParamsToObject(searchParams);
    setSearchParams({ ...currentParams, page: nextPage.toString() });
  };

  return (
    <Layout>
      {
        isLoading ? (
          <LocationListSketeton/>
        ) : (
          <LocationList locations={results} page={page} />
        )
      }
      <Pagination
        page={page}
        onPageChange={handlePageChange}
        pages={info?.pages}
      />
    </Layout>
  );
}
