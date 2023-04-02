import { configureStore } from "@reduxjs/toolkit";
import { favoritesReducer } from "./features/favorites/favorites.slice";
import storage  from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import { combineReducers } from "@reduxjs/toolkit"
import { persistStore } from "redux-persist"

const persistConfig = {
    key: "root",
    storage
}

const reducer = combineReducers({
    favorites: favoritesReducer
})

const persistedReducer = persistReducer(persistConfig, reducer)

export const store = configureStore({
    reducer: persistedReducer
})

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>