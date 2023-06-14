import { useMemo, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { Character, CharacterStatus } from "../types";
import { CharacterList } from "../components/CharacterList";
import { CharacterStatusFilter, Layout, Pagination } from "../components";
import { useGetSingleLocationApi } from "../hooks/api/useGetSingleLocationApi";
import { useGetCharactersApi } from "../hooks/api/useGetCharactersApi";
import { usePaginator } from "../hooks/usePaginator";
import { searchParamsToObject } from "../lib/helpers";

export default function Location() {
  const [searchParams, setSearchParams] = useSearchParams();
  const params = useParams<{ locationId: string }>();
  const locationId = params.locationId;
  const locationPage = searchParams.get("locationPage") || "1";

  const [status, setStatus] = useState<CharacterStatus | undefined>();
  const { data: location } = useGetSingleLocationApi({
    locationId,
    page: locationPage,
  });

  const { residents } = location || {};

  const { data: characters } = useGetCharactersApi({ residents, locationPage });

  const result = useMemo(() => {
    let data: Character[] = [];
    if (!characters) return data;

    if (Array.isArray(characters)) {
      data = characters;
    } else {
      data = [characters];
    }
    return status ? data.filter((char) => char.status === status) : data;
  }, [characters, status]);

  const { page, totalPages, pageItems, setPage } = usePaginator<Character>({
    items: result,
    initialPage: Number(searchParams.get("page") || "1"),
  });

  const handlePageChange = (nextPage: number) => {
    setPage(nextPage);
    const currentParams = searchParamsToObject(searchParams);
    setSearchParams({ ...currentParams, page: nextPage.toString() });
  };


  return (
    <Layout backLink={`/locations?page=${locationPage}`}>
      <div className="character-detail">
        <CharacterStatusFilter onChange={setStatus} />
        <CharacterList
          characters={pageItems}
          locationPage={+locationPage}
          page={page}
        />
      </div>
      <Pagination
        pages={totalPages}
        page={page}
        onPageChange={handlePageChange}
      />
    </Layout>
  );
}
