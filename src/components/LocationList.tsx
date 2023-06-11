import { Location } from "../types";
import { LocationCard } from "./LocationCard";

type Props = {
  locations?: Location[];
  fromPage?: number;
};

export const LocationList = ({ locations = [], fromPage = 1 }: Props) => {
  return (
    <div className="location-list">
      {locations.map((location) => (
        <LocationCard
          key={location.id}
          location={location}
          fromPage={fromPage}
        />
      ))}
    </div>
  );
};
