import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Layout, LocationList, Pagination } from "../components";
import { useGetLocationsApi } from "../hooks/api/useGetLocationsApi";
import { searchParamsToObject } from "../lib/helpers";

export default function Root() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [page, setPage] = useState(() => {
    return Number(searchParams.get("page") ?? 1);
  });

  const { data: locations } = useGetLocationsApi(page);

  const { results, info } = locations || {};

  const handlePageChange = (nextPage: number) => {
    setPage(nextPage);
    const currentParams = searchParamsToObject(searchParams);
    setSearchParams({ ...currentParams, page: nextPage.toString() });
  };

  return (
    <Layout>
      <LocationList locations={results} page={page} />
      <Pagination
        page={page}
        onPageChange={handlePageChange}
        pages={info?.pages}
      />
    </Layout>
  );
}
