import { Card } from "@/components/Home/Card";
import { Pagination } from "@/components/Pagination";
import { api } from "@/lib/axios";
import { CardsContainer, HomeContainer, SearchInput } from "@/styles/pages/home";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { useTheme } from 'styled-components'
import { BiSearchAlt } from 'react-icons/bi';

interface CharactersApi {
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


export default function Home() {
  const [currentPage, setCurrentPage] = useState(1);
  const {green300} = useTheme();

  const charactersPerPage = 20;
  const totalCharacters = 826;
  
  const { data, isLoading, refetch } = useQuery("characters", () => {
    return api.get<CharactersApi>(`character?page=${currentPage}`,).then(response => response.data.results)
  }, {
    refetchOnWindowFocus: false,
    enabled: false
  })

  useEffect(() => {
    refetch();
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
  }, [currentPage, refetch])

  function handleChangeCurrentPage(page: number) {
    setCurrentPage(page);
  }

  return (
    <HomeContainer>
      <SearchInput>
          <input type="text"/>
          <BiSearchAlt size={24} color={green300}/>
      </SearchInput>

      <CardsContainer>
        {!isLoading && data?.map(character =>
          <Card character={character} key={character.id} /> 
        )}
      </CardsContainer>
      
      <Pagination 
        totalCharacters={totalCharacters} 
        charactersPerPage={charactersPerPage} 
        handleChangeCurrentPage={handleChangeCurrentPage}
      />
    </HomeContainer>
  )
}
