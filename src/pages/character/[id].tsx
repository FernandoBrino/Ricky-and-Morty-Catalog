import { useAppSelector } from "@/hooks/selector";
import { api } from "@/lib/axios"
import { CharacterContainer, CharacterDescription, CharacterImage, Connector } from "@/styles/pages/character";
import { GetStaticProps } from "next"
import Image from "next/image";
import { useRouter } from "next/router";
import { BsGenderFemale, BsGenderMale, BsQuestionDiamond, BsStarFill } from "react-icons/bs";
import { FaGenderless } from "react-icons/fa";
import { useTheme } from "styled-components";
import { useDispatch } from "react-redux"
import { disfavorCard, favoriteCard } from "@/features/favorites/favorites.slice";
import Head from "next/head";

interface CharacterProps {
    character: CharacterType
}

type CharacterType = {
    id: number;
    name: string;
    status: string;
    species: string;
    type: string;
    gender: string;
    origin: {
      name: string;
    };
    location: {
      name: string;
    };
    episode: string[];
    image: string;
}


export default function Character({ character }: CharacterProps) {
    const { isFallback } = useRouter();
    const { yellow700 } = useTheme();
    const dispatch = useDispatch(); 
    const favoritesList = useAppSelector(state => state.favorites.favorites)

    if(isFallback) {
        return <p>Loading...</p>
    }

    function generateIconGender(gender: string) {
        switch (gender) {
            case "Female":
                return <BsGenderFemale size={34} color={"#EC49A6"}/>

            case "Male":
                return <BsGenderMale size={34} color={"#02A3FE"} />

            case "Genderless":
                return <FaGenderless size={34} color={"#AEA79D"}/>

            case "Unknown":
                return <BsQuestionDiamond size={34}/>
                
            default:
                return null;
        }
    }

    function checkCharacterFavorited(id: number) {
        const characterIsFavorited = favoritesList.find((character) => character.id === id)

        if(characterIsFavorited) {
            return true;
        }

        return false;
    }
    
    const isFavorited = checkCharacterFavorited(character.id)

    function handleFavoriteCard() {
        if(isFavorited) {
            dispatch(disfavorCard(character.id))
        } else {
            dispatch(favoriteCard(character))
        }
    }

    return (
        <>
            <Head>
                <title>{character.name}</title>
            </Head>
        

            <CharacterContainer>
                <div>
                    <Connector status={character.status}></Connector>

                    <CharacterImage status={character.status}>
                        <Image 
                            src={character.image} 
                            width={400} 
                            height={400} 
                            alt="" 
                            loader={() => character.image} 
                            unoptimized 
                            priority
                        />
                    </CharacterImage>
                </div>
                

                <CharacterDescription status={character.status}>
                    <BsStarFill 
                        className="favorite" 
                        size={24} 
                        onClick={handleFavoriteCard}
                        color={isFavorited ? yellow700 : "white"}
                    />

                    <div>
                        <span className="titleCharacter">
                            <h1>{character.name}</h1>
                            {generateIconGender(character.gender)}
                        </span>
                        
                        <p>{character.species} - {character.type === '' ? 'Type Not Specified' : character.type}</p>
                    </div>

                    <div>
                        <span className="subtitle">Last known location:</span>
                        <p>{character.location.name}</p>
                    </div>

                    <div>
                        <span className="subtitle">First seen in:</span>
                        <p>{character.origin.name}</p>
                    </div>

                    <div>
                        <span className="subtitle">Episodes:</span>
                        {character.episode.map(episode =>
                            <a href={episode} key={episode}>{episode}</a>
                        )}
                    </div>
                </CharacterDescription>
            </CharacterContainer>
        </>
    )
}

export async function getStaticPaths() {
    return {
        paths: [],
        fallback: true,
    }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
    let character: CharacterType;

    try {
        const characterId = params?.id ?? '';
        character = await api.get<CharacterType>(`character/${characterId}`).then(response => response.data)
    } catch (error) {
        return { 
            props: {
                character: null
            }
        }
    }

    return { 
        props: {
            character
        }
    }
} 