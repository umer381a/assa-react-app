import { Location } from "../types";
import { CharacterCardSkeleton } from "./CharacterCardSkeleton";
import { LocationCardSkeleton } from "./LocationCardSkeleton";

export const LocationListSketeton = () => {
  return (
    <div className="location-list">
      {new Array(12).fill(0).map((_, idx) => (
        <LocationCardSkeleton
          key={idx}
        />
      ))}
    </div>
  );
};
