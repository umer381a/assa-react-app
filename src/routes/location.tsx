import { useMemo, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { Character, CharacterStatus } from "../types";
import { CharacterList } from "../components/CharacterList";
import { CharacterStatusFilter, Layout, Pagination } from "../components";
import { useGetSingleLocationApi } from "../hooks/api/useGetSingleLocationApi";
import { useGetCharactersApi } from "../hooks/api/useGetCharactersApi";
import { usePaginator } from "../hooks/usePaginator";

export default function Location() {
  const [searchParams] = useSearchParams();
  const params = useParams<{ locationId: string }>();
  const locationId = params.locationId;
  const fromPage = searchParams.get("fromPage") || "1";

  const [status, setStatus] = useState<CharacterStatus | undefined>();
  const { data: location } = useGetSingleLocationApi({
    locationId,
    page: fromPage,
  });

  const { residents } = location || {};

  const { data: characters } = useGetCharactersApi(residents);

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
  });

  return (
    <Layout backLink={`/locations?page=${fromPage}`}>
      <div className="character-detail">
        <CharacterStatusFilter onChange={setStatus} />
        <CharacterList characters={pageItems} />
      </div>
      <Pagination pages={totalPages} page={page} onPageChange={setPage} />
    </Layout>
  );
}
