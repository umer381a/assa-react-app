import { Character } from "../types";
import { CharacterCard } from "./CharacterCard";

type Props = {
  characters?: Character[];
};

export const CharacterList = ({ characters = [] }: Props) => {
  return (
    <div className="character-list">
      {characters.map((character) => (
        <CharacterCard character={character} key={character.id} />
      ))}
    </div>
  );
};
