import axios from 'axios'
import { setCharacters, setComics, setSeries, getCharacterDetail } from '../store/slice'

const LOCALURL = 'http://localhost:5000'

export const allCharacters = () => async (dispatch) => {
    try {
        const charactersData = await axios.get(`${LOCALURL}/marv1/characters`)
        console.log('characters funcionando')
        dispatch(setCharacters(charactersData.data))
    } catch (error) {
        console.log(error)
    }
}

export const allComics = () => async (dispatch) => {
    try {
        const comicsData = await axios.get(`${LOCALURL}/marv1/comics`)
        dispatch(setComics(comicsData.data))
    } catch (error) {
        console.log(error)       
    }
}

export const allSeries = () => async (dispatch) => {
    try {
        const seriesData = await axios.get(`${LOCALURL}/marv1/series`)
        dispatch(setSeries(seriesData.data))
    } catch (error) {
        console.log(error)       
    }
}

export const getCharacterById = (idCharacter) => async (dispatch) => {
    try {
        const characterById = await axios.get(`${LOCALURL}/marv1/characters/${idCharacter}`)
        dispatch(getCharacterDetail(characterById.data))
    } catch (error) {
        console.log(error)
    }
}

