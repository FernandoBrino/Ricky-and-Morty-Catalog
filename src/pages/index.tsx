import { Card } from "@/components/Home/Card";
import { Pagination } from "@/components/Pagination";
import { api } from "@/lib/axios";
import { CardsContainer, HomeContainer, SearchInput } from "@/styles/pages/home";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { useTheme } from 'styled-components'
import { BiSearchAlt } from 'react-icons/bi';
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
interface CharactersApi {
  info: {
    count: number;
  }
  results: CharacterType[]
}

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

const searchCharacter = z.object({
  query: z.string(),
})

type SearchCharacterData = z.infer<typeof searchCharacter>

export default function Home() {
  const [currentPage, setCurrentPage] = useState(1);
  const {green300} = useTheme();
  const { register, watch } = useForm<SearchCharacterData>({
    resolver: zodResolver(searchCharacter),
    defaultValues: {
      query: ''
    }
  });

  const userSearch = watch("query");

  const characters = useQuery(["characters", currentPage, userSearch], () => {
    return api.get<CharactersApi>(`character?page=${currentPage}&name=${userSearch}`,).then(response => response.data)
  })

  const charactersPerPage = 20;
  const totalCharacters = characters.data?.info.count

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
  }, [currentPage])

  function handleChangeCurrentPage(page: number) {
    setCurrentPage(page);
  }

  return (
    <HomeContainer>
      <SearchInput>
          <input type="text" {...register("query")} placeholder="Enter character's name"/>
          <BiSearchAlt size={24} color={green300}/>
      </SearchInput>

      <CardsContainer>
        {
          !characters.isLoading && characters.data?.results.map(character =>
            <Card character={character} key={character.id} /> 
          )
        }
      </CardsContainer>
      
      
      <Pagination 
        totalCharacters={totalCharacters} 
        charactersPerPage={charactersPerPage} 
        currentPage={currentPage}
        handleChangeCurrentPage={handleChangeCurrentPage}
      />
      
    </HomeContainer>
  )
}
