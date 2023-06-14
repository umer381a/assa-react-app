import { Character } from "../types";
import { CharacterCard } from "./CharacterCard";

type Props = {
  characters?: Character[];
  locationPage: number;
  page: number;
};

export const CharacterList = ({ characters = [], ...otherProps }: Props) => {
  return (
    <div className="character-list">
      {characters.map((character) => (
        <CharacterCard
          character={character}
          key={character.id}
          {...otherProps}
        />
      ))}
    </div>
  );
};
