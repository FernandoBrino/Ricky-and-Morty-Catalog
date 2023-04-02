import { api } from "@/lib/axios";
import { useQuery } from "react-query";

type CharacterType =  {
    id: number;
    name: string;
    status: string;
    species: string;
    origin: {
      name: string;
    };
    location: {
      name: string;
    };
    image: string;
  }

type CharactersApi = {
    info: {
        count: number;
    }
    results: CharacterType[]
}

type StatusTypes = "Alive" | "Dead" | "Unknown" | ""

type GenderTypes = "Male" | "Female" | "Genderless" | "Unknown" | ""

type FiltersType = {
    status: StatusTypes;
    gender: GenderTypes;
}

interface UseCharactersProps {
    currentPage: number;
    userSearch: string;
    filtersList: FiltersType;
}

export function useCharacters({ currentPage, userSearch, filtersList }: UseCharactersProps) {
    const status = filtersList.status && `status=${filtersList.status}&`;
    const gender = filtersList.gender && `gender=${filtersList.gender}&`;
    const userSearchInput = userSearch && `name=${userSearch}&`;
    
    return useQuery(["characters", currentPage, userSearch, filtersList], () => {
        return api.get<CharactersApi>(`character?page=${currentPage}&${userSearchInput}${status}${gender}`,).then(response => response.data)
    })

}