import { useParams, useSearchParams } from "react-router-dom";
import {  Layout } from "../components";
import { useGetSingleCharacterApi } from "../hooks/api/useGetSingleCharacterApi";

export default function Character() {
  const [searchParams] = useSearchParams();
  const params = useParams<{ characterId: string }>();
  const characterId = params.characterId;
  const fromPage = searchParams.get("fromPage") || "1";
  const locationPage = searchParams.get("locationPage") || "1";

  const { isLoading, data: character } = useGetSingleCharacterApi({
    characterId,
    page: fromPage,
  });

  const locationId = character ? character.location.url.split("/").pop() : "";
  if (!character) return null;
  
  return (
    <Layout
    backLink={`/locations/${locationId}?page=${fromPage}&locationPage=${locationPage}`}
  >
    <div style={{ display: "flex" }}>this is something</div>
  </Layout>
  );
}
