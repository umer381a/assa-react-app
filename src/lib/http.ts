import { QueryClient } from "@tanstack/react-query";
import axios from "axios";

export const queryClient = new QueryClient();

export const http = axios.create({
  baseURL: "https://rickandmortyapi.com/api",
  headers: {
    Accept: "application/json",
  },
});
