import { Location } from "../types";
import { LocationCard } from "./LocationCard";

type Props = {
  locations?: Location[];
  page?: number;
};

export const LocationList = ({ locations = [], page = 1 }: Props) => {
  return (
    <div className="location-list">
      {locations.map((location) => (
         <LocationCard key={location.id} location={location} page={page} />
      ))}
    </div>
  );
};
