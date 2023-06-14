import { Link } from "react-router-dom";
import { Character } from "../types";

type Props = {
  character: Character;
    page: number;
  locationPage: number;
};

export const CharacterCard = ({ character , page, locationPage  }: Props) => {
  const { status, species } = character;
  return (
    <Link className="character-card" 
      to={`/characters/${character.id}?fromPage=${page}&locationPage=${locationPage}`}>
      <img src={character.image} alt={`character face`} />
      <h2 className="text-overflow">{character.name}</h2>
      <p>
        <span className={`status-${status.toLowerCase()} active`}></span>
        <span className="text-overflow">
          {status} - {species}
        </span>
      </p>
    </Link>
  );
};
