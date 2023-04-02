import { PayloadAction, createSlice } from "@reduxjs/toolkit";

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

interface FavoritesState {
    favorites: CharacterType[]
}


const initialState: FavoritesState = {
    favorites: []
}

export const favoritesSlice = createSlice({
    name: "favorites",
    initialState,
    reducers: {
        favoriteCard: (state, action: PayloadAction<CharacterType>) => {
            const isAlreadyFavorited = state.favorites.find(character => character.id === action.payload.id)

            if(!isAlreadyFavorited) {
                state.favorites.push(action.payload)
            }
        },
        disfavorCard: (state, action: PayloadAction<number>) => {
            const favoritesWithoutRemovedOne = state.favorites.filter(character => character.id !== action.payload)

            state.favorites = favoritesWithoutRemovedOne;
        }
    }
})

export const {favoriteCard, disfavorCard} = favoritesSlice.actions
export const favoritesReducer = favoritesSlice.reducer