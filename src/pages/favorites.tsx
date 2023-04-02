import { useTheme } from "styled-components";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { CardsContainer, FavoritesContainer, FavoritesNotExist, SearchInput } from "@/styles/pages/favorites";
import { Pagination } from "@/components/Pagination";
import { BiSearchAlt } from "react-icons/bi";
import { Card } from "@/components/Home/Card";
import { useAppSelector } from "@/hooks/useAppSelector";
import rickBebendo from "@/assets/rickBebendo.jpg"
import Image from "next/image";
import Link from "next/link";

type CharacterType = {
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
  const [filteredFavoriteList, setFilteredFavoriteList] = useState<CharacterType[]>([]);

  const charactersPerPage = 20;
  const totalCharacters = favoritesList.length;

  const userSearch = watch("query") ? watch("query").split(" ").map((word) => word[0]?.toUpperCase() + word.substring(1).split("").map((letter) => letter.toLowerCase()).join("")).join(" ") : "";

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
  }, [currentPage])

  useEffect(() => {
    const newFilteredList = favoritesList.filter(character => character.name.includes(userSearch))

    setFilteredFavoriteList(newFilteredList)
  }, [userSearch, favoritesList])

  function handleChangeCurrentPage(page: number) {
    setCurrentPage(page);
  }

  return (
    <FavoritesContainer>
      {favoritesList.length > 0 ? 
      <>
        <SearchInput>
          <input type="text" {...register("query")} placeholder="Enter character's name"/>
          <BiSearchAlt size={24} color={green300} />
        </SearchInput>

        <CardsContainer>
          {filteredFavoriteList ? 
            filteredFavoriteList.map(character =>
              <Card character={character} key={character.id} /> 
            ) : 
            favoritesList.slice(0, 20).map(character =>
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
      </>
        : 
        <FavoritesNotExist>
            <h1>Sem favoritos por aqui 😔</h1>

            <Image 
              src={rickBebendo}
              width={400} 
              height={400} 
              alt="" 
              priority
            />

            <Link href="/">
              Back to Home
            </Link>
        </FavoritesNotExist>
    }
      
      
    </FavoritesContainer>
  )
}
