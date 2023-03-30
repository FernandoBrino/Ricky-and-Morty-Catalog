import { Card } from "@/components/Home/Card";
import { Pagination } from "@/components/Pagination";
import { api } from "@/lib/axios";
import { HomeContainer } from "@/styles/pages/home";
import { useState } from "react";
import { useQuery } from "react-query";
// import { GetServerSideProps } from "next";

// interface HomeProps {
//   characters: CharacterProps[]
// }

interface CharactersApi {
  results: CharacterProps[]
}
interface CharacterProps {
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
  const charactersPerPage = 20;
  const totalCharacters = 400;
  

  const { data, isLoading, refetch } = useQuery("characters", () => {
    return api.get<CharactersApi>(`character?page=${currentPage}`,).then(response => response.data.results)
  }, {
    refetchOnWindowFocus: false,
    enabled: false
  })

  refetch();

  function handleChangeCurrentPage(page: number) {
    setCurrentPage(page);
    refetch();
  }

  return (
    <HomeContainer>
      {!isLoading && data?.map(character => 
        <Card character={character} key={character.id} />
      )}
      <Pagination 
        totalCharacters={totalCharacters} 
        charactersPerPage={charactersPerPage} 
        handleChangeCurrentPage={handleChangeCurrentPage}
      />
    </HomeContainer>
  )
}

// export const getServerSideProps: GetServerSideProps = async () => {
//   let characters;

//   try {
//     characters = await api.get<CharactersApi>("character",).then(response => response.data.results)
//   } catch (error) {
//     return {
//       props: {
//         characters: null
//       }
//     }
//   }
 
//   return {
//     props: {
//       characters
//     }
//   }
// }
