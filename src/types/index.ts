export interface DataInfo {
  pages: number;
  next: string | null;
  prev: string | null;
  count: number;
}

export interface DataCollection<T> {
  info: DataInfo;
  results: T[];
}

export interface BaseModel {
  id: number;
  url: string;
  name: string;
  type: string;
  created: string;
}

export type CharacterStatus = "Alive" | "Dead" | "unknown";

export interface Character extends BaseModel {
  status: CharacterStatus;
  species: string;
  gender: string;
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
  episode: string[];
}

export interface Location extends BaseModel {
  residents: string[];
  dimension: string;
}
