import { useTheme } from "styled-components";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useQuery } from "react-query";
import { api } from "@/lib/axios";
import { CardsContainer, FavoritesContainer, SearchInput } from "@/styles/pages/favorites";
import { Pagination } from "@/components/Pagination";
import { BiSearchAlt } from "react-icons/bi";
import { Card } from "@/components/Home/Card";
import { useAppSelector } from "@/hooks/selector";

const searchCharacter = z.object({
  query: z.string(),
})

type SearchCharacterData = z.infer<typeof searchCharacter>

export default function Favorites() {
  const [currentPage, setCurrentPage] = useState(1);
  const {green300} = useTheme();
  const { register, watch } = useForm<SearchCharacterData>({
    resolver: zodResolver(searchCharacter),
    defaultValues: {
      query: ''
    }
  });
  const favoritesList = useAppSelector(state => state.favorites.favorites);
  
  const charactersPerPage = 20;
  const totalCharacters = favoritesList.length

  const userSearch = watch("query");

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
  }, [currentPage])

  function handleChangeCurrentPage(page: number) {
    setCurrentPage(page);
  }

  return (
    <FavoritesContainer>
      <SearchInput>
          <input type="text" {...register("query")} placeholder="Enter character's name"/>
          <BiSearchAlt size={24} color={green300} />
      </SearchInput>

      <CardsContainer>
        {
          favoritesList.map(character =>
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
      
    </FavoritesContainer>
  )
}
