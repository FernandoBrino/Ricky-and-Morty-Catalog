import Image from "next/image"
import { CardContainer, Description } from "./styles"
import {BsStar} from "react-icons/bs"
import { FC } from "react"
import {useTheme} from "styled-components"

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

    return (
        <CardContainer href={`/character/${character.id}`} status={character.status}>
            <BsStar className="favorite" size={24} color={yellow700} />

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
        </CardContainer>
    )
}