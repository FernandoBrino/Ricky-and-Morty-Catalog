import { api } from "@/lib/axios"
import { CharacterContainer, CharacterImage } from "@/styles/pages/character";
import { GetStaticProps } from "next"
import Image from "next/image";
import { useRouter } from "next/router";

interface CharacterProps {
    character: CharacterType
}

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


export default function Character({ character }: CharacterProps) {
    const { isFallback } = useRouter();

    if(isFallback) {
        return <p>Loading...</p>
    }

    return (
        <CharacterContainer>
            <div className="characterDescription">

            </div>

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
        </CharacterContainer>
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