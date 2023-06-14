import { CharacterCardSkeleton } from "./CharacterCardSkeleton";


export const CharacterListSkeleton = () => {
  return (
    <div className="character-list">
      {new Array(12).fill(0).map((_, idx) => (
        <CharacterCardSkeleton
          key={idx}
        />
      ))}
    </div>
  );
};
