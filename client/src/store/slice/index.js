import { createSlice } from "@reduxjs/toolkit";

export const infoMarvel = createSlice({
    name: 'marvelous',
    initialState: {
        characters: [],
        comics: [],
        series: []
    },
    reducers: {
        setCharacters: (state, action) => {
            state.characters = action.payload
        },
        setComics: (state, action) => {
            state.comics = action.payload
        },
        setSeries: (state, action) => {
            state.series = action.payload
        }
    }
})

export const { setCharacters, setComics, setSeries } = infoMarvel.actions
export default infoMarvel.reducer