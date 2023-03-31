import { configureStore } from "@reduxjs/toolkit";
import { favoritesReducer } from "./features/favorites/favorites.slice";

export const store = configureStore({
    reducer: {
        favorites: favoritesReducer
    }
})

export type RootState = ReturnType<typeof store.getState>