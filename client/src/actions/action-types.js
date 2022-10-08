import axios from 'axios'
import { setCharacters, setComics, setSeries } from '../store/slice'

const LOCALURL = 'http://localhost:5000'

export const allCharacters = () => async (dispatch) => {
    try {
        const charactersData = await axios.get(`${LOCALURL}/marv1/characters`)
        dispatch(setCharacters(charactersData.data))
    } catch (error) {
        console.log(error)
    }
}

export const allComics = () => async (dispatch) => {
    try {
        const comicsData = await axios.get(`/marv1/comics`)
        dispatch(setComics(comicsData.data))
    } catch (error) {
        console.log(error)       
    }
}

export const allSeries = () => async (dispatch) => {
    try {
        const seriesData = await axios.get(`/marv1/series`)
        dispatch(setSeries(seriesData.data))
    } catch (error) {
        console.log(error)       
    }
}

