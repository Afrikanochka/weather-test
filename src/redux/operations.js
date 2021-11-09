import weatherApi from "../services/api";
import { fetchSearchError, fetchSearchRequest, fetchSearchSuccess } from "./actions"

export const getWeather = (name) => async dispatch => {
    dispatch(fetchSearchRequest());

    try {
        const newSearch = await weatherApi(name)
        dispatch(fetchSearchSuccess(newSearch));
    } catch (error) {
        dispatch(fetchSearchError(error.toString()));
    };
}
