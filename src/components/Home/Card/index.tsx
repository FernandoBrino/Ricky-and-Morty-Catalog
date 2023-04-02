import Image from "next/image"
import { CardContainer, Description } from "./styles"
import {BsStarFill} from "react-icons/bs"
import { FC } from "react"
import {useTheme} from "styled-components"
import { useDispatch } from "react-redux"
import { disfavorCard, favoriteCard } from "@/features/favorites/favorites.slice"
import { useAppSelector } from "@/hooks/useAppSelector"
import Link from "next/link"
import { CardSkeleton } from "./CardSkeleton"

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
interface CardProps {
    character: CharacterType;
}

export const Card: FC<CardProps> = ({ character }) => {
    const { yellow700 } = useTheme();
    const dispatch = useDispatch(); 
    const favoritesList = useAppSelector(state => state.favorites.favorites)

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
        <CardContainer status={character.status}>
            <BsStarFill 
                className="favorite" 
                size={24} 
                onClick={handleFavoriteCard}
                color={isFavorited ? yellow700 : "white"}
            />
            <Link href={`/character/${character.id}`} >
                <Image 
                    src={character.image} 
                    width={250} 
                    height={200} 
                    alt="" 
                    loader={() => character.image} 
                    unoptimized  
                    priority
                />

                <Description status={character.status}>
                    <h1>{character.name}</h1>

                    <div className="status">
                        <p>{character.status} - {character.species}</p>
                    </div>

                    <div>
                        <span className="subtitle">Last known location:</span>
                        <p>{character.location.name}</p>
                    </div>

                    <div>
                        <span className="subtitle">First seen in:</span>
                        <p>{character.origin.name}</p>
                    </div>
                </Description>
            </Link>
        </CardContainer>
    )
}