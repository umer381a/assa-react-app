import { useParams, useSearchParams } from "react-router-dom";
import {  Layout } from "../components";
import { useGetSingleCharacterApi } from "../hooks/api/useGetSingleCharacterApi";
import { useGetCharactersApi } from "../hooks/api/useGetCharactersApi";
import { useGetSingleLocationApi } from "../hooks/api/useGetSingleLocationApi";

export default function Character() {
  const [searchParams] = useSearchParams();
  const params = useParams<{ characterId: string }>();
  const characterId = params.characterId;
  const fromPage = searchParams.get("fromPage") || "1";
  const locationPage = searchParams.get("locationPage") || "1";

  const { isLoading, data: character } = useGetSingleCharacterApi({
    characterId,
    locationPage: fromPage,
  });

  const locationId = character ? character.location.url.split("/").pop() : "";
  const { data: location } = useGetSingleLocationApi({
    locationId,
    page: locationPage,
  });

  const { data: characters } = useGetCharactersApi({
    residents: location?.residents,
    locationPage: locationPage,
  });
  
  return (
    <Layout
    backLink={`/locations/${locationId}?page=${fromPage}&locationPage=${locationPage}`}
  >
       <div className="character-container">
        <div className="character-info-card">
          <img src={character?.image} alt="" />
          <h2 className="name">{character?.name}</h2>
          <div className="info">
            <div className="info-left">
              <span
                className={`status-${character?.status.toLowerCase()} active`}
              ></span>
              <span className="text-overflow">
                {character?.status} - {character?.species}
              </span>
            </div>
            <div className="info-right">
              {location?.dimension} - {character?.gender}
            </div>
          </div>
          <p></p>
        </div>
        <div className="other-characters-list">
          <h2 className="title">Other characters</h2>
          <div className="list">
            {Array.isArray(characters) &&
              characters.map((char) => (
                <div className="mini-character-card" key={char.id}>
                  <img src={char.image} alt="" />
                  <div className="info">
                    <h3>{char.name}</h3>
                    <p>{location?.dimension}</p>
                    <p>
                      {location?.dimension} - {character?.gender}
                    </p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
  </Layout>
  );
}
