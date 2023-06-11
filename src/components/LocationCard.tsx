import { Link } from "react-router-dom";
import { Location } from "../types";

type Props = {
  location: Location;
  fromPage: number;
};

export const LocationCard = ({ location, fromPage }: Props) => {
  return (
    <Link
      className="location-card"
      to={`/locations/${location.id}?fromPage=${fromPage}`}
    >
      <h2 className="text-overflow">{location.name || "-"}</h2>
      <dl>
        <dt>Type</dt>
        <dd className="text-overflow">{location.type || "-"}</dd>
      </dl>
      <dl>
        <dt>Dimension</dt>
        <dd className="text-overflow">{location.dimension || "-"}</dd>
      </dl>
      <dl>
        <dt>Resident count</dt>
        <dd>{location.residents.length || "-"}</dd>
      </dl>
    </Link>
  );
};
