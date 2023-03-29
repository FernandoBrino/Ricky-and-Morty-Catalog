import { FavoritesContainer } from '@/styles/pages/favorites'
import {AiFillStar} from 'react-icons/ai'
import {useTheme} from 'styled-components'

export default function Favorites () {
    const {yellow} = useTheme()

    return (
        <FavoritesContainer>
            {/* <h1>Your <span>Favorite</span> Characters</h1>
            <AiFillStar size={24} color={yellow}/> */}

            
        </FavoritesContainer>
        
    )
}