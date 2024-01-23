import { useQuery } from "@tanstack/react-query";
import fetchPetBreedlist from "./fetchBreedList";

export default function useBreedList(animal){
  const results = useQuery(["breeds", animal], fetchPetBreedlist);

  return [results?.data?.breeds ?? [], results.status]
}