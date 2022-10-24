import { createSlice } from "@reduxjs/toolkit";

export const infoMarvel = createSlice({
    name: 'marvelous',
    initialState: {
        characters: [],
        comics: [],
        series: [],
        characterDetail: [],
        comicDetail: [],
        serieDetail: []
    },
    reducers: {
        setCharacters: (state, action) => {
            state.characters = action.payload
            state.characterDetail = action.payload
        },
        setComics: (state, action) => {
            state.comics = action.payload
        },
        setSeries: (state, action) => {
            state.series = action.payload
        },
        getCharacterDetail: (state, action) => {
            state.characterDetail = action.payload
        }
    }
})

export const { setCharacters, setComics, setSeries, getCharacterDetail } = infoMarvel.actions
export default infoMarvel.reducer