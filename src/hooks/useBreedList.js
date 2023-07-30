import { useQuery } from "@tanstack/react-query";
import fetchBreedList from "../../fetches/fetchBreedList";

export default function useBreedList(animal) {
  const result = useQuery(["breed-list", animal], fetchBreedList);

  return [result?.data?.breeds ?? [], result.status];
}
